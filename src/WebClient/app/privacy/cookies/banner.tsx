'use client';

import CookieConsentDialog from '@shrugman/privacy/cookies/consent-dialog';
import CookieFab from '@shrugman/privacy/cookies/fab';
import CookieManagerDialog from '@shrugman/privacy/cookies/manager-dialog';
import useCookieBanner from '@shrugman/privacy/cookies/use-cookie-banner';

export default function CookieBanner() {
  const {
    showFab,
    consentDialogOpen,
    managerDialogOpen,
    analyticsEnabled,
    advertisingEnabled,
    handleAcceptClick,
    handleRejectClick,
    handleManageClick,
    handleSaveClick,
    handleAnalyticsToggle,
    handleAdvertisingToggle,
    handleFabClick,
  } = useCookieBanner();

  return (
    <div>
      {showFab && <CookieFab onClick={handleFabClick} />}

      <div>
        <CookieConsentDialog
          open={consentDialogOpen}
          onAccept={handleAcceptClick}
          onReject={handleRejectClick}
          onManage={handleManageClick}
        />
      </div>

      <div>
        <CookieManagerDialog
          open={managerDialogOpen}
          onAccept={handleAcceptClick}
          onReject={handleRejectClick}
          onSave={handleSaveClick}
          advertisingEnabled={advertisingEnabled}
          analyticsEnabled={analyticsEnabled}
          onAdvertisingToggle={handleAdvertisingToggle}
          onAnalyticsToggle={handleAnalyticsToggle}
        />
      </div>
    </div>
  );
}
