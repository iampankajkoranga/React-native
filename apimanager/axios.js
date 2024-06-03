import axios from "axios";
import ENV from "@video-ready/common/config/env/env.json";

export const instance = axios.create({
  baseURL: ENV?.baseUrl,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    tenant_identifier: ENV?.tenantInfo?.identifier,
  },
});
