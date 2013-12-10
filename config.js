// CHANGE THESE VALUES TO MATCH YOUR DEVELOPER ACCOUNT
// developer account = james.taylor@paypal.com
exports.PAYPAL_APP_ID = "AX6pWxCGU2t_JewkXEsHoHaOc8kPpQ_M0P5h1QcJe6Msr6gU3RFIoa71rI_u";
exports.PAYPAL_SECRET = "EIvAahAf6yN6OJEQiYmUBcVUXMTtciMwbAfePIerVJcDsOqLMFVPps-5A_8j";

// If true, all calls to the PayPal Here API will go through this sample server. See the README for
// a discussion of this, but basically this is more secure and simpler to manage at the cost of relatively
// small additional latency (because calls come to your backend first, then to PayPal)
exports.CENTRAL_SERVER_MODE = true;

// Note that you need an entry in your hosts file for this
// and that it must match the returnUrl set on your app in
// PayPal Access
exports.MY_HOSTNAME = "http://ancient-dawn-6273.herokuapp.com";
exports.MY_PORT = 80;
exports.MY_APP_URL = "http://localhost:61951/return.aspx";
//exports.MY_APP_URL = "sdksampleapp://oauth";

// In case you want more info, modify this
exports.PAYPAL_SCOPES = "https://uri.paypal.com/services/paypalhere openid email profile";

// Live or stage?    This lets your sample server know which paypal service
// to connect to (live, sandbox, or a custom stage server)
//exports.PAYPAL_ACCESS_BASEURL = "https://www.paypal.com/webapps/";
exports.PAYPAL_ACCESS_BASEURL = "https://sandbox.paypal.com/webapps/";
