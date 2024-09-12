
    import { createPiece, PieceAuth } from "@activepieces/pieces-framework";
    import { authProp } from "./lib/common/auth";
    import { sendInvitation } from "./lib/actions/create-invitation";

    export const ecomon = createPiece({
      displayName: "Ecomon",
      auth: authProp,
      minimumSupportedRelease: '0.20.0',
      logoUrl: 'https://easy4pro-ecomon.gradient0.com/ecomon.png',
      authors: [],
      actions: [sendInvitation],
      triggers: [],
    });
