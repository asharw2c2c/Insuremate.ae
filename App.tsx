import React, { useState } from 'react';
import { SetupWizard } from './components/SetupWizard';
import { LandingPage } from './components/LandingPage';
import { BrandAssets, BrandColors } from './types';
import { applyTheme } from './utils/colorHelper';

const App: React.FC = () => {
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const [assets, setAssets] = useState<BrandAssets | null>(null);

  const handleSetupComplete = (uploadedAssets: BrandAssets, extractedColors: BrandColors) => {
    setAssets(uploadedAssets);
    applyTheme(extractedColors.primary, extractedColors.secondary, extractedColors.accent);
    setIsSetupComplete(true);
  };

  return (
    <>
      {!isSetupComplete ? (
        <SetupWizard onComplete={handleSetupComplete} />
      ) : (
        assets && <LandingPage assets={assets} />
      )}
    </>
  );
};

export default App;