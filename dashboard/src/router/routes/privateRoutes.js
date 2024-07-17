import adminRoutes from "./adminRoute";
import sellerRoutes from "./sellerRoutes";

const privateRoutes = [
  ...adminRoutes,
  ...sellerRoutes
]

export default privateRoutes