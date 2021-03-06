import { DARK_MATTER, VOYAGER } from '@carto/react-basemaps';
// @ts-ignore
import { API_VERSIONS } from '@deck.gl/carto';

export const initialState = {
  viewState: {
    latitude: 36.264447946064095,
    longitude: -6.212540764181938,
    zoom: 4.8,
    pitch: 0,
    bearing: 0,
    dragRotate: false,
  },
  basemap: DARK_MATTER,
  credentials: {
    apiVersion: API_VERSIONS.V3,
    apiBaseUrl: 'https://gcp-us-east1.api.carto.com',
  },
  googleApiKey: '', // only required when using a Google Basemap,
  googleMapId: '', // only required when using a Google Custom Basemap
  oauth: {
    domain: 'auth.carto.com',
    // Type here your application client id
    clientId: '',
    scopes: [
      'read:current_user',
      'update:current_user',
      'read:connections',
      'write:connections',
      'read:maps',
      'write:maps',
      'read:account',
      'admin:account',
    ],
    audience: 'carto-cloud-native-api',
    authorizeEndPoint: 'https://carto.com/oauth2/authorize', // only valid if keeping https://localhost:3000/oauthCallback
  },
};
