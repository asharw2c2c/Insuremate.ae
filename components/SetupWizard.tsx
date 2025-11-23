import React, { useState, useRef } from 'react';
import { Upload, Check, ChevronRight, Loader2, Image as ImageIcon } from 'lucide-react';
import { BrandAssets, BrandColors } from '../types';
import { SETUP_STEPS } from '../constants';
import { extractColorsFromImage, applyTheme } from '../utils/colorHelper';

interface SetupWizardProps {
  onComplete: (assets: BrandAssets, colors: BrandColors) => void;
}

export const SetupWizard: React.FC<SetupWizardProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [assets, setAssets] = useState<Partial<BrandAssets>>({});
  const [colors, setColors] = useState<BrandColors>({ primary: '#1e3a8a', secondary: '#0f172a', accent: '#f59e0b' });
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentStepData = SETUP_STEPS[currentStep];

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    const objectUrl = URL.createObjectURL(file);

    // Save asset
    const newAssets = { ...assets, [currentStepData.id]: objectUrl };
    setAssets(newAssets);

    // Special handling for Logo to extract colors
    if (currentStepData.id === 'logo') {
      try {
        const extracted = await extractColorsFromImage(objectUrl);
        setColors(extracted);
        applyTheme(extracted.primary, extracted.secondary, extracted.accent);
      } catch (e) {
        console.error("Color extraction failed", e);
      }
    }

    // Simulate a brief processing delay for better UX
    setTimeout(() => {
      setIsProcessing(false);
      if (currentStep < SETUP_STEPS.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        // All done
        onComplete(newAssets as BrandAssets, colors);
      }
    }, 800);
  };

  const handleTriggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 p-8 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-slate-800">
            <div 
              className="h-full bg-blue-500 transition-all duration-500" 
              style={{ width: `${((currentStep) / SETUP_STEPS.length) * 100}%` }}
            />
          </div>
          <h1 className="text-2xl font-bold mb-2">Setup Insuremate Site</h1>
          <p className="text-slate-400 text-sm">Step {currentStep + 1} of {SETUP_STEPS.length}</p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-8 text-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              {isProcessing ? <Loader2 className="animate-spin" /> : <Upload />}
            </div>
            <h2 className="text-xl font-semibold text-slate-800 mb-2">{currentStepData.label}</h2>
            <p className="text-slate-500 text-sm">{currentStepData.description}</p>
          </div>

          {/* Color Preview (Only after logo) */}
          {currentStep > 0 && (
            <div className="mb-6 p-4 bg-slate-50 rounded-lg">
              <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Extracted Brand Palette</p>
              <div className="flex gap-2">
                <div className="h-8 w-8 rounded-full shadow-sm ring-1 ring-slate-200" style={{ backgroundColor: colors.primary }} title="Primary" />
                <div className="h-8 w-8 rounded-full shadow-sm ring-1 ring-slate-200" style={{ backgroundColor: colors.secondary }} title="Secondary" />
                <div className="h-8 w-8 rounded-full shadow-sm ring-1 ring-slate-200" style={{ backgroundColor: colors.accent }} title="Accent" />
              </div>
            </div>
          )}

          <div className="space-y-4">
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleFileSelect}
            />
            
            <button 
              onClick={handleTriggerUpload}
              disabled={isProcessing}
              className="w-full py-4 px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? 'Processing...' : `Upload ${currentStepData.label}`}
              {!isProcessing && <ChevronRight size={18} />}
            </button>

            <div className="text-center">
              <p className="text-xs text-slate-400">
                Please upload a high quality image.
              </p>
            </div>
          </div>
        </div>

        {/* Completed Steps */}
        <div className="bg-slate-50 p-4 border-t border-slate-100">
          <div className="flex justify-between items-center text-xs text-slate-500">
             <span>Progression</span>
             <span>{Math.round((currentStep / SETUP_STEPS.length) * 100)}% Complete</span>
          </div>
        </div>
      </div>
    </div>
  );
};