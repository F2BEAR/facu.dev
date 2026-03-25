export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

type GtmEvent = {
  event: string;
  [key: string]: unknown;
};

export function pushEvent(payload: GtmEvent) {
  if (typeof window == "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
}
