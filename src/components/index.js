export { Theme } from "./Theme";
export { AnimatedView } from "./Animations";
export { TextField } from "./Fields";

export { default as Images } from "./images";
export { default as Text } from "./Text";
export { default as Button } from "./Button";
export { default as Container } from "./Container";
export { default as LoadingIndicator } from "./LoadingIndicator";
export { default as Avatar } from "./Avatar";
export { default as SmartImage } from "./SmartImage";
export { default as CacheManager } from "./CacheManager";
export { default as RefreshIndicator } from "./RefreshIndicator";
export { default as NavHeader } from "./NavHeader";
export { default as Firebase } from "./Firebase";
export { default as ImageUpload } from "./ImageUpload";
export { default as SpinningIndicator } from "./SpinningIndicator";

export const serializeException = (e: string | {}): string => {
  if (typeof e === "string") {
    return e;
  } else if (e.message) {
    return e.message;
  }
  return JSON.stringify(e);
};
