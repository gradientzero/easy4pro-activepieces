
    import { createPiece, PieceAuth } from "@activepieces/pieces-framework";
    import { sendInvitation } from './lib/actions/create-invitation';
    import { newOnEventTrigger } from './lib/triggers/on-event';
    import { authProp } from './lib/common/auth';

    export const fiesda = createPiece({
      displayName: "Fiesda",
      auth: authProp,
      minimumSupportedRelease: '0.20.0',
      logoUrl: "https://easy4pro-fiesda.gradient0.com/fiesda.png",
      authors: [],
      actions: [sendInvitation],
      triggers: [newOnEventTrigger],
    });
