/* @ds-bundle: {"format":4,"namespace":"HUBDesignSystem_d87c4c","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"LetterBox","sourcePath":"components/core/LetterBox.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Stepper","sourcePath":"components/forms/Stepper.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Dialog","sourcePath":"components/surfaces/Dialog.jsx"},{"name":"RoomCard","sourcePath":"components/surfaces/RoomCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"16f8b03bf074","components/core/Button.jsx":"7e6abd939952","components/core/Eyebrow.jsx":"bd55cd5beee5","components/core/Icon.jsx":"2be8b1b5a284","components/core/IconButton.jsx":"e406d3522efd","components/core/LetterBox.jsx":"f5641abffa73","components/core/Tag.jsx":"0ab428e7ccaf","components/feedback/Toast.jsx":"908e3a194d09","components/feedback/Tooltip.jsx":"ed97df1e7093","components/forms/Checkbox.jsx":"c647dfabb2a6","components/forms/Input.jsx":"b99223c09df2","components/forms/Radio.jsx":"1cfa85b93f2a","components/forms/Select.jsx":"ae523aff7b6d","components/forms/Stepper.jsx":"b78843728002","components/forms/Switch.jsx":"0a91a9d33dc8","components/navigation/Tabs.jsx":"819268786b28","components/surfaces/Card.jsx":"eab06074fcd7","components/surfaces/Dialog.jsx":"27450f83f1f4","components/surfaces/RoomCard.jsx":"37bba686bc26","publish/js/Checkout.babel.js":"4248c740e6c4","publish/js/Confirmation.babel.js":"20517866e7d4","publish/js/Gaming.babel.js":"e05693d8e29d","publish/js/Header.babel.js":"f8e5ac6cb9fa","publish/js/Home.babel.js":"3bc2f2d722f1","publish/js/Inquiry.babel.js":"e75422c4ce25","publish/js/Menu.babel.js":"be64b9354a47","publish/js/RoomPicker.babel.js":"543dbc9778c2","publish/js/Rooms.babel.js":"4b4d84f95b18","publish/js/Sport.babel.js":"81744a043bf8","publish/js/data.js":"bed993bcf03c","ui_kits/booking/Booking.jsx":"ef6d0f54c3a0","ui_kits/booking/Checkout.jsx":"8ae322461621","ui_kits/booking/Confirmation.jsx":"5227ee9b2bcf","ui_kits/booking/Gaming.jsx":"3d052fb869f3","ui_kits/booking/Header.jsx":"f991d8d5324d","ui_kits/booking/Home.jsx":"9d6b756f51a0","ui_kits/booking/Inquiry.jsx":"e75422c4ce25","ui_kits/booking/Menu.jsx":"da609a244530","ui_kits/booking/RoomPicker.jsx":"1676bc837bd1","ui_kits/booking/Rooms.jsx":"7311bb50b4ef","ui_kits/booking/Sport.jsx":"267f79f45294","ui_kits/booking/data.js":"c7a47ad15a68"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HUBDesignSystem_d87c4c = window.HUBDesignSystem_d87c4c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = {
  pink: {
    bg: 'var(--hub-pink)',
    fg: 'var(--hub-cream)'
  },
  ink: {
    bg: 'var(--hub-ink)',
    fg: 'var(--hub-cream)'
  },
  cream: {
    bg: 'var(--hub-cream-2)',
    fg: 'var(--hub-ink)'
  },
  success: {
    bg: 'var(--status-success)',
    fg: 'var(--hub-white)'
  },
  warning: {
    bg: 'var(--status-warning)',
    fg: 'var(--hub-ink)'
  },
  danger: {
    bg: 'var(--status-danger)',
    fg: 'var(--hub-white)'
  }
};
function Badge({
  color = 'pink',
  children,
  style,
  ...rest
}) {
  const t = T[color] || T.pink;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 22,
      padding: '0 8px',
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      borderRadius: 0,
      whiteSpace: 'nowrap',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  tone = 'light',
  children,
  style,
  ...rest
}) {
  const c = tone === 'dark' ? 'var(--hub-pink-light)' : tone === 'brand' ? 'var(--hub-cream)' : 'var(--hub-pink-deep)';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: c,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const HUB_ICONS = {
  "device-tv": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill=\"none\"><rect width=\"20.55\" height=\"13.77\" x=\"1.72\" y=\"6.5\" fill=\"currentColor\" opacity=\".2\" rx=\"3\"></rect><rect width=\"20.55\" height=\"13.77\" x=\"1.72\" y=\"6.5\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" rx=\"3\"></rect><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M10.9 6.5L8.48 1.53M13.1 6.5l1.69-4.33\"></path></g></svg>",
  "flame": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill=\"none\"><path fill=\"currentColor\" d=\"M16.29 9.33a11 11 0 0 1-2.47-6.66c-.02-.33-.32-.55-.6-.36a8.4 8.4 0 0 0-2.6 3.3c-1 2.19-.97 4.77-.9 5.89c.02.3-.22.57-.51.51c-1.45-.27-2.03-1.57-2.42-2.29c-.12-.23-.41-.25-.56-.03c-.56.83-1.22 2.65-.95 5.15c.5 4.8 3.85 6.78 6.72 6.78c2.28 0 5.9-.74 6.68-5.25c.37-2.17-.16-4.41-2.4-7.04\" opacity=\".2\"></path><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M16.29 9.33a11 11 0 0 1-2.43-5.99c-.05-.56-.08-.83-.37-.95c-.28-.1-.45.04-.79.34a9 9 0 0 0-2.07 2.87a13 13 0 0 0-.93 5.33c.01.58.02.87-.2 1.03c-.23.15-.43.06-.84-.11a3.6 3.6 0 0 1-1.64-1.7c-.16-.3-.24-.44-.54-.43c-.3 0-.36.13-.5.38c-.48.95-.93 2.6-.7 4.74c.5 4.8 3.85 6.78 6.72 6.78c2.28 0 5.9-.74 6.68-5.25c.37-2.17-.16-4.41-2.4-7.04\"></path></g></svg>",
  "leaf": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill=\"none\"><path fill=\"currentColor\" d=\"M6.52 5.59c4.29-3.82 10-3.91 12.51-3.74c.78.06 1.4.62 1.5 1.4c.34 2.46.52 8.08-3.62 12.66c-3.76 4.15-8.78 3.36-11.27 1.12c-2.27-2.05-3.5-7.54.88-11.44\" opacity=\".2\"></path><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M6.52 5.59c3.67-3.27 8.38-3.8 11.23-3.79c1.1.01 1.66.02 2.23.56s.6 1.08.68 2.16c.17 2.81-.22 7.48-3.75 11.39c-3.76 4.15-8.78 3.36-11.27 1.12c-2.27-2.05-3.5-7.55.88-11.44\"></path><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M11.9 10.43c-2.22 1.39-6.96 5.74-8.12 12.09\"></path></g></svg>",
  "vegan": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill=\"none\"><path fill=\"currentColor\" d=\"M15.85 4.7a7 7 0 0 1 3.94-1.08c.96 0 1.44 0 2.04.78s.48 1.23.24 2.12a6.7 6.7 0 0 1-2.21 3.53c-1.98 1.62-4.2.94-5.17-.24c-.9-1.08-1.08-3.65 1.16-5.12\" opacity=\".2\"></path><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M15.85 4.7a7.6 7.6 0 0 1 5.22-.99c.54.08.81.12 1.06.43c.25.32.22.59.17 1.12a7 7 0 0 1-2.44 4.79c-1.98 1.62-4.2.94-5.17-.24c-.9-1.08-1.08-3.65 1.16-5.12\"></path><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M17.81 7.65a16.2 16.2 0 0 0-8.35 13.02c-.5-6.8-4.2-10.99-7.68-13.02\"></path></g></svg>",
  "movie": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill=\"none\"><rect width=\"18.66\" height=\"10.7\" x=\"2.67\" y=\"10.64\" fill=\"currentColor\" opacity=\".2\" rx=\"3\"></rect><path fill=\"currentColor\" d=\"M3.28 8.75c-.24-.92-.36-1.38-.16-1.74c.21-.36.67-.48 1.6-.72l1.42-.37c1.49-.38 2.23-.58 2.64-.17c.4.41.2 1.16-.2 2.64c-.15.52-.22.77-.4.96c-.17.18-.42.26-.93.42l-1.4.45c-.94.3-1.4.46-1.78.25c-.38-.2-.5-.68-.76-1.63z\" opacity=\".2\"></path><rect width=\"18.66\" height=\"10.7\" x=\"2.67\" y=\"10.64\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" rx=\"3\"></rect><path fill=\"currentColor\" d=\"M21.05 4.09c.24.91.37 1.37.16 1.73s-.67.48-1.6.72l-1.42.37c-1.49.39-2.23.58-2.63.17c-.41-.41-.2-1.15.2-2.64c.14-.51.21-.77.39-.95c.17-.19.42-.27.93-.43l1.4-.45c.94-.3 1.4-.45 1.78-.25s.5.68.76 1.64z\" opacity=\".2\"></path><rect width=\"18.66\" height=\"4.31\" x=\"2.43\" y=\"6.8\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" rx=\"1\" transform=\"rotate(-15 2.43 6.8)\"></rect><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M9.4 5.02L8.12 9.5m7.77-6.12L14.6 7.85\"></path></g></svg>",
  "game-controller": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill=\"none\"><path fill=\"currentColor\" d=\"M22.28 16.68q.1-.26.1-.54v-.67c0-4.1 0-6.15-.96-7.63a6 6 0 0 0-1.79-1.8C18.15 5.1 16.1 5.1 12 5.1s-6.15 0-7.63.96a6 6 0 0 0-1.79 1.79c-.96 1.48-.96 3.53-.96 7.63v.46q0 .49.24.92l.23.43a3.1 3.1 0 0 0 4.8.83l.47-.42c.29-.26.43-.39.59-.5a4 4 0 0 1 1.98-.75c.19-.02.38-.02.77-.02h1.9c.81 0 1.22 0 1.6.08a4 4 0 0 1 .8.25c.37.16.7.39 1.37.85l.83.58c.57.4 1.25.6 1.94.6h.15a3.2 3.2 0 0 0 3-2.1\" opacity=\".2\"></path><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M6.28 10.83h4.26M8.4 12.96V8.7\"></path><path fill=\"currentColor\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M15.4 12.31a.42.42 0 1 1-.85 0a.42.42 0 0 1 .84 0m2.33-2.96a.42.42 0 1 1-.84 0a.42.42 0 0 1 .84 0\"></path><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M19.25 19.04a2.84 2.84 0 0 0 2.82-3.11l-.21-2.22c-.31-3.17-.47-4.75-1.2-5.94a6 6 0 0 0-2.45-2.22c-1.25-.62-2.85-.62-6.03-.62h-.35c-3.18 0-4.77 0-6.03.62a6 6 0 0 0-2.44 2.21c-.74 1.19-.9 2.77-1.2 5.94l-.23 2.19a2.87 2.87 0 0 0 4.89 2.32l.45-.45c.41-.4.62-.61.85-.77a3 3 0 0 1 1.13-.46c.27-.06.56-.06 1.15-.06h3.26c.58 0 .87 0 1.15.06a3 3 0 0 1 1.12.46c.23.16.44.36.85.77l.47.46c.53.53 1.25.82 2 .82\"></path></g></svg>"
};
const HUB_ICON_ALIAS = {
  tv: 'device-tv',
  'gamepad-2': 'game-controller',
  gamepad: 'game-controller',
  clapperboard: 'movie',
  film: 'movie',
  sprout: 'vegan'
};
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style,
  ...rest
}) {
  const own = HUB_ICONS[HUB_ICON_ALIAS[name] || name];
  const url = own ? `data:image/svg+xml,${encodeURIComponent(own).replace(/[()']/g, c => '%' + c.charCodeAt(0).toString(16).toUpperCase())}` : `https://unpkg.com/lucide-static@0.460.0/icons/${name}.svg`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: 'inline-block',
      flex: 'none',
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("${url}") center/contain no-repeat`,
      mask: `url("${url}") center/contain no-repeat`,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 'var(--control-h-sm)',
    px: 14,
    fs: 14
  },
  md: {
    h: 'var(--control-h-md)',
    px: 20,
    fs: 15
  },
  lg: {
    h: 'var(--control-h-lg)',
    px: 28,
    fs: 17
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  tone = 'light',
  icon,
  iconRight,
  disabled,
  fullWidth,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const dark = tone === 'dark';
  const V = {
    primary: {
      bg: hover ? 'var(--hub-pink-deep)' : 'var(--hub-pink)',
      fg: 'var(--hub-cream)',
      bd: 'transparent'
    },
    secondary: {
      bg: hover ? dark ? 'var(--hub-cream)' : 'var(--hub-ink)' : 'transparent',
      fg: hover ? dark ? 'var(--hub-ink)' : 'var(--hub-cream)' : dark ? 'var(--hub-cream)' : 'var(--hub-ink)',
      bd: dark ? 'var(--hub-cream)' : 'var(--hub-ink)'
    },
    outline: {
      bg: hover ? 'var(--hub-pink)' : 'transparent',
      fg: hover ? 'var(--hub-cream)' : dark ? 'var(--hub-pink-light)' : 'var(--hub-pink)',
      bd: dark ? 'var(--hub-pink-light)' : 'var(--hub-pink)'
    },
    ghost: {
      bg: hover ? dark ? 'var(--hub-ink-3)' : 'var(--hub-cream-2)' : 'transparent',
      fg: dark ? 'var(--hub-cream)' : 'var(--hub-ink)',
      bd: 'transparent'
    },
    inverse: {
      bg: hover ? 'var(--hub-white)' : 'var(--hub-cream)',
      fg: 'var(--hub-ink)',
      bd: 'transparent'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest, {
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.h,
      padding: `0 ${s.px}px`,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: s.fs,
      letterSpacing: '0.01em',
      background: V.bg,
      color: V.fg,
      border: `2px solid ${V.bd}`,
      borderRadius: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transform: press && !disabled ? 'translateY(1px)' : 'none',
      transition: 'background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out)',
      whiteSpace: 'nowrap',
      ...style
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.fs + 3
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.fs + 3
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  variant = 'ghost',
  tone = 'light',
  size = 40,
  disabled,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dark = tone === 'dark';
  const fg = variant === 'primary' ? 'var(--hub-cream)' : variant === 'outline' ? dark ? 'var(--hub-pink-light)' : 'var(--hub-pink)' : dark ? 'var(--hub-cream)' : 'var(--hub-ink)';
  const bg = variant === 'primary' ? hover ? 'var(--hub-pink-deep)' : 'var(--hub-pink)' : hover ? dark ? 'var(--hub-ink-3)' : 'var(--hub-cream-2)' : 'transparent';
  const bd = variant === 'outline' ? dark ? 'var(--hub-pink-light)' : 'var(--hub-pink)' : 'transparent';
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      width: size,
      height: size,
      display: 'inline-grid',
      placeItems: 'center',
      padding: 0,
      background: bg,
      color: fg,
      border: `2px solid ${bd}`,
      borderRadius: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background var(--duration-fast)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.5)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/LetterBox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LetterBox({
  children,
  size = 64,
  color = 'var(--hub-pink)',
  fill = false,
  style,
  ...rest
}) {
  const bw = Math.max(2, Math.round(size * 0.1));
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      width: size,
      height: size,
      flex: 'none',
      display: 'inline-grid',
      placeItems: 'center',
      border: `${bw}px solid ${color}`,
      background: fill ? color : 'transparent',
      color: fill ? 'var(--hub-cream)' : color,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: Math.round(size * 0.53),
      lineHeight: 1,
      boxSizing: 'border-box',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { LetterBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LetterBox.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  selected,
  tone = 'light',
  onClick,
  children,
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  const bd = selected ? 'var(--hub-pink)' : dark ? 'var(--hub-ink-line)' : 'var(--hub-cream-line)';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    "aria-pressed": !!selected
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 32,
      padding: '0 12px',
      background: selected ? 'var(--hub-pink)' : 'transparent',
      color: selected ? 'var(--hub-cream)' : dark ? 'var(--hub-cream)' : 'var(--hub-ink)',
      border: `2px solid ${bd}`,
      borderRadius: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 14,
      cursor: onClick ? 'pointer' : 'default',
      transition: 'background var(--duration-fast)',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const ICON = {
  info: 'info',
  success: 'check',
  warning: 'alert-triangle',
  danger: 'x-circle'
};
const COLOR = {
  info: 'var(--hub-pink-light)',
  success: '#6fc391',
  warning: 'var(--status-warning)',
  danger: '#ef7a7a'
};
function Toast({
  kind = 'info',
  title,
  children,
  onClose,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      width: 360,
      maxWidth: '100%',
      padding: '14px 16px',
      background: 'var(--hub-ink)',
      color: 'var(--hub-cream)',
      borderLeft: `4px solid ${COLOR[kind]}`,
      boxShadow: 'var(--shadow-float)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ICON[kind],
    size: 18,
    color: COLOR[kind],
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-300)',
      marginTop: 2
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Lukk",
    onClick: onClose,
    style: {
      background: 'none',
      border: 0,
      color: 'var(--hub-grey-400)',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  text,
  children,
  placement = 'top'
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false),
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      whiteSpace: 'nowrap',
      padding: '6px 10px',
      background: 'var(--hub-ink)',
      color: 'var(--hub-cream)',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 500,
      zIndex: 50,
      pointerEvents: 'none'
    }
  }, text));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  onChange,
  label,
  tone = 'light',
  disabled,
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: dark ? 'var(--hub-cream)' : 'var(--hub-ink)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      border: `2px solid ${checked ? 'var(--hub-pink)' : dark ? 'var(--hub-ink-line)' : 'var(--hub-grey-400)'}`,
      background: checked ? 'var(--hub-pink)' : 'transparent',
      boxSizing: 'border-box'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "10",
    viewBox: "0 0 12 10"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5l3.5 3.5L11 1.5",
    fill: "none",
    stroke: "#f6f2ee",
    strokeWidth: "2.2"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelStyle = dark => ({
  display: 'block',
  marginBottom: 6,
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  fontSize: 13,
  color: dark ? 'var(--hub-cream)' : 'var(--hub-ink)'
});
const helpStyle = (dark, err) => ({
  marginTop: 6,
  fontSize: 12,
  color: err ? 'var(--status-danger)' : dark ? 'var(--hub-grey-400)' : 'var(--hub-grey-600)'
});
function Input({
  label,
  help,
  error,
  icon,
  tone = 'light',
  style,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const dark = tone === 'dark';
  const iid = id || React.useId();
  const bd = error ? 'var(--status-danger)' : focus ? 'var(--hub-pink)' : dark ? 'var(--hub-ink-line)' : 'var(--hub-cream-line)';
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: iid,
    style: labelStyle(dark)
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 'var(--control-h-md)',
      padding: '0 14px',
      background: dark ? 'var(--hub-ink-2)' : 'var(--hub-white)',
      border: `2px solid ${bd}`,
      color: dark ? 'var(--hub-grey-400)' : 'var(--hub-grey-600)'
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: iid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 0,
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: dark ? 'var(--hub-cream)' : 'var(--hub-ink)'
    }
  }))), (help || error) && /*#__PURE__*/React.createElement("div", {
    style: helpStyle(dark, !!error)
  }, error || help));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  checked,
  onChange,
  label,
  name,
  value,
  tone = 'light',
  disabled,
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: dark ? 'var(--hub-cream)' : 'var(--hub-ink)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: !!checked,
    disabled: disabled,
    onChange: () => onChange && onChange(value),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: '50%',
      border: `2px solid ${checked ? 'var(--hub-pink)' : dark ? 'var(--hub-ink-line)' : 'var(--hub-grey-400)'}`,
      display: 'grid',
      placeItems: 'center',
      boxSizing: 'border-box'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--hub-pink)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelStyle = dark => ({
  display: 'block',
  marginBottom: 6,
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  fontSize: 13,
  color: dark ? 'var(--hub-cream)' : 'var(--hub-ink)'
});
const helpStyle = (dark, err) => ({
  marginTop: 6,
  fontSize: 12,
  color: err ? 'var(--status-danger)' : dark ? 'var(--hub-grey-400)' : 'var(--hub-grey-600)'
});
function Select({
  label,
  help,
  options = [],
  tone = 'light',
  style,
  id,
  ...rest
}) {
  const dark = tone === 'dark';
  const iid = id || React.useId();
  const chevron = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%23d0426a' stroke-width='2'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: iid,
    style: labelStyle(dark)
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: iid
  }, rest, {
    style: {
      width: '100%',
      height: 'var(--control-h-md)',
      padding: '0 40px 0 14px',
      appearance: 'none',
      background: `${dark ? 'var(--hub-ink-2)' : 'var(--hub-white)'} ${chevron} no-repeat right 14px center`,
      border: `2px solid ${dark ? 'var(--hub-ink-line)' : 'var(--hub-cream-line)'}`,
      borderRadius: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: dark ? 'var(--hub-cream)' : 'var(--hub-ink)'
    }
  }), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), help && /*#__PURE__*/React.createElement("div", {
    style: helpStyle(dark)
  }, help));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Stepper.jsx
try { (() => {
function Stepper({
  value = 0,
  onChange,
  min = 0,
  max = 99,
  label,
  unit,
  tone = 'light',
  size = 'md',
  style
}) {
  const dark = tone === 'dark';
  const sm = size === 'sm';
  const set = v => onChange && onChange(Math.max(min, Math.min(max, v)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: sm ? 10 : 14,
      fontFamily: 'var(--font-body)',
      color: dark ? 'var(--hub-cream)' : 'var(--hub-ink)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: sm ? 14 : 15,
      fontWeight: 500,
      flex: 1
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: `${sm ? 1 : 2}px solid ${dark ? 'var(--hub-ink-line)' : 'var(--hub-cream-line)'}`
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "minus",
    label: "F\xE6rre",
    size: sm ? 22 : 36,
    tone: tone,
    disabled: value <= min,
    onClick: () => set(value - 1)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: sm ? 26 : 44,
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: sm ? 14 : 18
    }
  }, value, unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: sm ? 11 : 13,
      marginLeft: 3
    }
  }, unit) : null), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "plus",
    label: "Flere",
    size: sm ? 22 : 36,
    tone: tone,
    disabled: value >= max,
    onClick: () => set(value + 1)
  })));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label,
  tone = 'light',
  disabled,
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: dark ? 'var(--hub-cream)' : 'var(--hub-ink)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": !!checked,
    disabled: disabled,
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 44,
      height: 24,
      padding: 2,
      border: 0,
      borderRadius: 0,
      background: checked ? 'var(--hub-pink)' : dark ? 'var(--hub-ink-line)' : 'var(--hub-grey-400)',
      cursor: 'inherit',
      transition: 'background var(--duration-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 20,
      height: 20,
      background: 'var(--hub-cream)',
      transform: checked ? 'translateX(20px)' : 'none',
      transition: 'transform var(--duration-base) var(--ease-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  tone = 'light',
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 28,
      borderBottom: `1px solid ${dark ? 'var(--hub-ink-line)' : 'var(--hub-cream-line)'}`,
      ...style
    }
  }, items.map(it => {
    const v = typeof it === 'string' ? it : it.value;
    const l = typeof it === 'string' ? it : it.label;
    const on = v === value;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(v),
      style: {
        background: 'none',
        border: 0,
        padding: '12px 0',
        marginBottom: -1,
        borderBottom: `3px solid ${on ? 'var(--hub-pink)' : 'transparent'}`,
        fontFamily: 'var(--font-body)',
        fontWeight: on ? 700 : 500,
        fontSize: 15,
        color: on ? dark ? 'var(--hub-cream)' : 'var(--hub-ink)' : dark ? 'var(--hub-grey-400)' : 'var(--hub-grey-600)',
        cursor: 'pointer'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  tone = 'light',
  variant = 'filled',
  interactive,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dark = tone === 'dark';
  const base = variant === 'framed' ? {
    background: 'transparent',
    border: `3px solid ${dark ? 'var(--hub-pink)' : 'var(--hub-pink)'}`
  } : variant === 'dashed' ? {
    background: 'transparent',
    border: `3px dashed ${dark ? 'var(--hub-ink-line)' : 'var(--hub-cream-line)'}`
  } : variant === 'accent' ? {
    background: dark ? 'var(--dark-surface-card)' : 'var(--surface-card)',
    borderLeft: 'var(--border-accent) solid var(--hub-pink)'
  } : variant === 'inverse' ? {
    background: dark ? 'var(--hub-cream)' : 'var(--hub-ink)'
  } : {
    background: dark ? 'var(--dark-surface-card)' : 'var(--surface-card)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      padding: 24,
      borderRadius: 0,
      color: variant === 'inverse' !== dark ? 'var(--hub-cream)' : 'var(--hub-ink)',
      cursor: interactive ? 'pointer' : undefined,
      transition: 'background var(--duration-fast), border-color var(--duration-fast)',
      ...base,
      ...(interactive && hover ? {
        borderColor: 'var(--hub-pink-light)',
        background: variant === 'framed' ? dark ? 'var(--hub-ink-2)' : 'var(--hub-pink-tint)' : base.background
      } : {}),
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  eyebrow,
  children,
  footer,
  width = 480
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(23,20,26,.72)',
      display: 'grid',
      placeItems: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--hub-cream)',
      color: 'var(--hub-ink)',
      borderTop: '6px solid var(--hub-pink)',
      boxShadow: 'var(--shadow-float)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: '22px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--hub-pink-deep)',
      marginBottom: 6
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      letterSpacing: '-0.02em',
      lineHeight: 1.1
    }
  }, title)), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Lukk",
    onClick: onClose,
    size: 36
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 24px 24px',
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--hub-grey-700)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      padding: '16px 24px',
      background: 'var(--hub-cream-2)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/RoomCard.jsx
try { (() => {
function RoomCard({
  number,
  name,
  club,
  closed,
  image,
  capacity,
  price,
  status,
  selected,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const active = selected || hover;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--hub-ink)',
      border: `3px solid ${active ? 'var(--hub-pink)' : 'var(--hub-ink-3)'}`,
      cursor: onClick ? 'pointer' : undefined,
      color: 'var(--hub-cream)',
      transition: 'border-color var(--duration-fast)',
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4/3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: hover ? 'scale(1.03)' : 'none',
      transition: 'transform var(--duration-slow) var(--ease-out)'
    }
  }), status && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    color: status === 'Utsolgt' ? 'ink' : 'pink',
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, status)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: '-0.015em'
    }
  }, number != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--hub-pink-light)',
      marginRight: 6
    }
  }, number), name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--hub-grey-300)'
    }
  }, [club, closed && `til ${closed}`].filter(Boolean).join(' · ')), (capacity || price) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 10,
      paddingTop: 10,
      borderTop: '1px solid var(--hub-ink-3)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--hub-grey-300)'
    }
  }, capacity), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, price))));
}
Object.assign(__ds_scope, { RoomCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/RoomCard.jsx", error: String((e && e.message) || e) }); }

// publish/js/Checkout.babel.js
try { (() => {
function Checkout({
  match,
  room,
  hours,
  onBack,
  onDone
}) {
  const {
    Eyebrow,
    Card,
    Stepper,
    Checkbox,
    Radio,
    Input,
    Button,
    Switch
  } = window.HUBDesignSystem_d87c4c;
  const [guests, setGuests] = React.useState(8);
  const [food, setFood] = React.useState({
    f1: 4,
    f2: 2,
    f3: 0
  });
  const [pz, setPz] = React.useState({
    p1: 0,
    p2: 2,
    p3: 0,
    p4: 1,
    p5: 0
  });
  const [drinks, setDrinks] = React.useState(true);
  const [pay, setPay] = React.useState('split');
  const [remind, setRemind] = React.useState(true);
  const F = window.HUB_DATA.food;
  const P = window.HUB_DATA.pizzas;
  const foodSum = F.reduce((s, f) => s + f.price * food[f.id], 0) + P.reduce((s, p) => s + p.price * pz[p.id], 0);
  const pzCount = P.reduce((s, p) => s + pz[p.id], 0);
  const roomSum = room.perHour * hours;
  const total = roomSum + foodSum + (drinks ? 690 : 0);
  const H = ({
    children
  }) => /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 16px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: '-0.015em'
    }
  }, children);
  const Line = ({
    a,
    b,
    strong
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 0',
      fontSize: strong ? 18 : 15,
      fontWeight: strong ? 700 : 400
    }
  }, /*#__PURE__*/React.createElement("span", null, a), /*#__PURE__*/React.createElement("span", null, b));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--hub-cream)',
      minHeight: 'calc(100vh - 68px)',
      color: 'var(--hub-ink)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '40px var(--page-margin) 72px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "arrow-left",
    onClick: onBack,
    style: {
      marginLeft: -14
    }
  }, "Velg rom"), /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      margin: '20px 0 8px'
    }
  }, "Mat og drikke"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 32px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(32px,6vw,48px)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, "Maten kommer inn i pausen"), /*#__PURE__*/React.createElement("div", {
    className: "hub-split",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 360px',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(H, null, "Gjengen"), /*#__PURE__*/React.createElement(Stepper, {
    label: "Antall gjester",
    value: guests,
    min: 2,
    max: 16,
    onChange: setGuests,
    style: {
      display: 'flex'
    }
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(H, null, "Matpakker"), F.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '12px 0',
      borderTop: '1px solid var(--hub-cream-line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, f.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-700)'
    }
  }, f.desc, " \xB7 ", kr(f.price), " per person")), /*#__PURE__*/React.createElement(Stepper, {
    value: food[f.id],
    min: 0,
    max: 14,
    onChange: v => setFood({
      ...food,
      [f.id]: v
    })
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 14,
      borderTop: '1px solid var(--hub-cream-line)'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: drinks,
    onChange: setDrinks,
    label: "Drikke p\xE5 bordet n\xE5r dere kommer \xB7 kr 690"
  }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      columnGap: 12
    }
  }, /*#__PURE__*/React.createElement(H, null, "Pizza"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-700)'
    }
  }, pzCount, " stk \xB7 \xE9n pizza holder til to")), P.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '12px 0',
      borderTop: '1px solid var(--hub-cream-line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      flex: 'none',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: 'var(--hub-pink-deep)'
    }
  }, p.no), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-700)'
    }
  }, p.desc, " \xB7 ", kr(p.price))), /*#__PURE__*/React.createElement(Stepper, {
    value: pz[p.id],
    min: 0,
    max: 10,
    onChange: v => setPz({
      ...pz,
      [p.id]: v
    })
  })))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(H, null, "Betaling"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      flexWrap: 'wrap',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "pay",
    value: "split",
    checked: pay === 'split',
    onChange: setPay,
    label: "Del regningen i appen"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "pay",
    value: "one",
    checked: pay === 'one',
    onChange: setPay,
    label: "\xC9n betaler alt"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hub-2col",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Navn",
    defaultValue: "Kristian"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-post",
    placeholder: "navn@epost.no",
    icon: "mail"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: remind,
    onChange: setRemind,
    label: "Send p\xE5minnelse til gjengen"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "hub-aside",
    style: {
      position: 'sticky',
      top: 92,
      background: 'var(--hub-ink)',
      color: 'var(--hub-cream)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "Din booking"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      margin: '8px 0 2px'
    }
  }, room.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-300)',
      marginBottom: 16
    }
  }, match.away ? `${match.home} – ${match.away}` : match.home, " \xB7 ", match.day, " ", match.time), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--hub-ink-3)'
    }
  }, /*#__PURE__*/React.createElement(Line, {
    a: `Romleie · ${hours} t`,
    b: kr(roomSum)
  }), /*#__PURE__*/React.createElement(Line, {
    a: "Mat",
    b: kr(foodSum)
  }), drinks && /*#__PURE__*/React.createElement(Line, {
    a: "Drikke",
    b: kr(690)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--hub-ink-3)',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Line, {
    a: "Totalt",
    b: kr(total),
    strong: true
  }), pay === 'split' && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--hub-grey-400)',
      textAlign: 'right'
    }
  }, kr(Math.round(total / guests)), " per person")), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    style: {
      marginTop: 20
    },
    onClick: () => onDone({
      guests,
      total
    })
  }, "Betal og book"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--hub-grey-400)',
      marginTop: 10,
      textAlign: 'center'
    }
  }, "Alt betales p\xE5 forh\xE5nd")))));
}
window.Checkout = Checkout;
})(); } catch (e) { __ds_ns.__errors.push({ path: "publish/js/Checkout.babel.js", error: String((e && e.message) || e) }); }

// publish/js/Confirmation.babel.js
try { (() => {
function Confirmation({
  match,
  room,
  booking,
  onHome
}) {
  const {
    Eyebrow,
    LetterBox,
    Button,
    Toast
  } = window.HUBDesignSystem_d87c4c;
  const [toast, setToast] = React.useState(true);
  const steps = [['Kvittering', 'Sendt til e-posten din. Vis den i resepsjonen når dere kommer.'], ['Ankomst', 'Rommet er klart 15 minutter før kampstart, med drikke på bordet.'], ['Mat', 'Maten serveres i pausen. Mer kan bestilles fra skjermen i rommet.'], ['Endre', 'Gratis endring og avbestilling inntil 48 timer før.']];
  return /*#__PURE__*/React.createElement("section", {
    className: "hub-sec",
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '72px var(--page-margin) 96px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "Booket"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '8px 0 12px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(34px,7vw,56px)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--hub-cream)'
    }
  }, room.name, " er booket"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 48px',
      fontSize: 18,
      color: 'var(--hub-grey-300)'
    }
  }, match.away ? `${match.home} – ${match.away}` : match.home, " \xB7 ", match.day, " kl. ", match.time, " \xB7 ", booking.guests, " gjester \xB7 ", kr(booking.total)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))',
      gap: 20
    }
  }, steps.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      borderTop: '4px solid var(--hub-pink)',
      paddingTop: 18,
      opacity: i === 0 ? 1 : 0.85
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 40,
      color: 'var(--hub-pink-light)',
      lineHeight: 1
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--hub-cream)',
      margin: '14px 0 6px'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--hub-grey-300)'
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    className: "hub-actions",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: "share-2"
  }, "Del med gjengen"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    tone: "dark",
    onClick: onHome
  }, "Tilbake til kamper")), toast && /*#__PURE__*/React.createElement(Toast, {
    kind: "success",
    title: "Betaling mottatt",
    onClose: () => setToast(false),
    style: {
      position: 'fixed',
      right: 16,
      bottom: 16,
      zIndex: 30,
      maxWidth: 'calc(100vw - 32px)'
    }
  }, "Kvittering er sendt p\xE5 e-post."));
}
window.Confirmation = Confirmation;
})(); } catch (e) { __ds_ns.__errors.push({ path: "publish/js/Confirmation.babel.js", error: String((e && e.message) || e) }); }

// publish/js/Gaming.babel.js
try { (() => {
const HUB_GAMES = [['Sport', [['EA Sports FC', 'PS5 · Xbox · PC'], ['NBA 2K', 'PS5 · Xbox'], ['Madden NFL', 'PS5 · Xbox'], ['NHL', 'PS5 · Xbox'], ['Rocket League', 'PS5 · Xbox · PC · Switch']]], ['Fest og sofa', [['Mario Kart 8 Deluxe', 'Switch'], ['Super Smash Bros. Ultimate', 'Switch'], ['Overcooked! 2', 'PS5 · Switch'], ['Mario Party Superstars', 'Switch'], ['It Takes Two', 'PS5 · Xbox']]], ['Skyting', [['Call of Duty', 'PS5 · Xbox · PC'], ['Fortnite', 'PS5 · Xbox · PC · Switch'], ['Counter-Strike 2', 'PC'], ['Valorant', 'PC'], ['Apex Legends', 'PS5 · PC']]], ['Slåssing', [['Street Fighter 6', 'PS5 · Xbox'], ['Tekken 8', 'PS5 · Xbox'], ['Mortal Kombat 1', 'PS5 · Xbox']]], ['Retro', [['Crash Bandicoot N. Sane Trilogy', 'PS5 · Switch'], ['Tomb Raider I–III Remastered', 'PS5 · Switch'], ['Doom + Doom II', 'PC · Xbox'], ['Street Fighter 30th Anniversary Collection', 'PS5']]], ['Simracing', [['EA Sports F1', 'Simrigg'], ['Assetto Corsa Competizione', 'Simrigg'], ['iRacing', 'Simrigg'], ['Gran Turismo 7', 'Simrigg · PS5']]]];
function GamingBooking({
  eyebrow,
  title,
  lead,
  rooms,
  sim,
  bg,
  onDone
}) {
  const {
    Eyebrow,
    Input,
    Select,
    Stepper,
    Button,
    Tag,
    Icon
  } = window.HUBDesignSystem_d87c4c;
  const [sel, setSel] = React.useState(rooms[0].id);
  const [hours, setHours] = React.useState(sim ? 1 : 2);
  const [whole, setWhole] = React.useState(false);
  const [rigs, setRigs] = React.useState(2);
  const room = rooms.find(r => r.id === sel);
  const total = (sim ? whole ? room.wholeRoom : room.perHour * rigs : room.perHour) * hours;
  const laps = window.HUB_DATA.lapTimes;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '56px var(--page-margin) 72px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 12px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(32px,4vw,48px)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--hub-cream)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 32px',
      fontSize: 17,
      lineHeight: 1.5,
      color: 'var(--hub-grey-300)',
      maxWidth: 640
    }
  }, lead), /*#__PURE__*/React.createElement("div", {
    className: "hub-split",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 340px',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,240px),1fr))',
      gap: 16
    }
  }, rooms.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    onClick: () => setSel(r.id),
    style: {
      cursor: 'pointer',
      background: 'var(--hub-ink-3)',
      border: `3px solid ${sel === r.id ? 'var(--hub-pink)' : 'transparent'}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/10',
      background: `url(${r.image}) center/cover var(--hub-ink)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--hub-cream)'
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 14,
      color: 'var(--hub-grey-300)',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: sim ? 'gauge' : 'users',
    size: 16
  }), r.capacity), /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--hub-cream)'
    }
  }, sim && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: 'var(--hub-grey-400)'
    }
  }, "fra "), kr(r.perHour), " / t")))))), sim && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8,
      color: 'var(--hub-cream)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trophy",
    size: 18,
    color: "var(--hub-pink-light)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "Ukens rundetid \xB7 ", laps[0].track)), laps.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: l.name,
    style: {
      display: 'flex',
      gap: 12,
      padding: '7px 0',
      borderTop: '1px solid var(--hub-ink-line)',
      fontSize: 14,
      color: 'var(--hub-grey-300)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      fontWeight: 700,
      color: i === 0 ? 'var(--hub-pink-light)' : 'var(--hub-grey-400)'
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: 'var(--hub-cream)'
    }
  }, l.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums',
      fontWeight: 600
    }
  }, l.time))))), /*#__PURE__*/React.createElement("div", {
    className: "hub-aside",
    style: {
      position: 'sticky',
      top: 92,
      background: 'var(--hub-ink)',
      borderTop: '3px solid var(--hub-pink)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, sim ? 'Book simracing' : 'Book gamingrom'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--hub-cream)'
    }
  }, room.name), sim && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "dark",
    selected: !whole,
    onClick: () => setWhole(false)
  }, "Enkeltrigger"), /*#__PURE__*/React.createElement(Tag, {
    tone: "dark",
    selected: whole,
    onClick: () => setWhole(true)
  }, "Hele rommet")), sim && !whole && /*#__PURE__*/React.createElement(Stepper, {
    tone: "dark",
    label: "Antall rigger",
    value: rigs,
    min: 1,
    max: room.rigs,
    onChange: setRigs,
    style: {
      display: 'flex'
    }
  }), sim && whole && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-300)'
    }
  }, "Alle ", room.rigs, " rigger, ", kr(room.wholeRoom), " per time."), /*#__PURE__*/React.createElement("div", {
    className: "hub-2col",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    tone: "dark",
    label: "Dato",
    type: "date"
  }), /*#__PURE__*/React.createElement(Select, {
    tone: "dark",
    label: "Starttid",
    options: ['14:00', '16:00', '18:00', '20:00', '22:00']
  })), /*#__PURE__*/React.createElement(Stepper, {
    tone: "dark",
    label: "Timer",
    value: hours,
    min: 1,
    max: 6,
    onChange: setHours,
    style: {
      display: 'flex'
    }
  }), /*#__PURE__*/React.createElement(Input, {
    tone: "dark",
    label: "E-post",
    placeholder: "navn@epost.no",
    icon: "mail"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      borderTop: '1px solid var(--hub-ink-3)',
      paddingTop: 12,
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--hub-cream)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Totalt"), /*#__PURE__*/React.createElement("span", null, kr(total))), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    onClick: () => onDone(room.name)
  }, "Betal og book")))));
}
function Gaming() {
  const {
    Tag,
    Toast,
    Eyebrow
  } = window.HUBDesignSystem_d87c4c;
  const R = window.HUB_DATA.rooms;
  const [cat, setCat] = React.useState('Alle');
  const [done, setDone] = React.useState(null);
  const games = HUB_GAMES.filter(([c]) => cat === 'Alle' || c === cat);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--hub-ink-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '40px var(--page-margin) 40px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "Gaming og simracing"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 8px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 36,
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--hub-cream)'
    }
  }, "Spill"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 20px',
      fontSize: 16,
      color: 'var(--hub-grey-300)'
    }
  }, "Et utvalg av det som er installert. Si fra om du savner noe."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 28
    }
  }, ['Alle', ...HUB_GAMES.map(([c]) => c)].map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    tone: "dark",
    selected: cat === c,
    onClick: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      columns: 'min(100%,300px) 3',
      columnGap: 40
    }
  }, games.map(([c, list]) => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      breakInside: 'avoid',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 6px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--hub-cream)',
      paddingBottom: 8,
      borderBottom: '3px solid var(--hub-pink)'
    }
  }, c), list.map(([gm, p]) => /*#__PURE__*/React.createElement("div", {
    key: gm,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      padding: '10px 0',
      borderBottom: '1px solid var(--hub-ink-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--hub-cream)',
      fontWeight: 600,
      fontSize: 15
    }
  }, gm), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--hub-grey-400)',
      whiteSpace: 'nowrap'
    }
  }, p)))))))), /*#__PURE__*/React.createElement(GamingBooking, {
    eyebrow: "Gaming",
    title: "Spill p\xE5 storskjerm med gjengen",
    lead: "PS5, Xbox, Switch og gaming-PC i alle rom, med kontrollere og headset til alle. Bestill mat fra skjermen.",
    rooms: R.filter(r => r.type === 'gaming'),
    bg: "var(--hub-ink)",
    onDone: setDone
  }), /*#__PURE__*/React.createElement(GamingBooking, {
    sim: true,
    eyebrow: "Simracing",
    title: "Kj\xF8r mot gjengen",
    lead: "Seks rigger side om side med ratt, pedaler og eget sete. Plasseringer og rundetider vises p\xE5 storskjermen. Book \xE9n rigg eller hele rommet.",
    rooms: R.filter(r => r.type === 'sim'),
    bg: "var(--hub-ink-2)",
    onDone: setDone
  }), done && /*#__PURE__*/React.createElement(Toast, {
    kind: "success",
    title: `${done} er booket`,
    onClose: () => setDone(null),
    style: {
      position: 'fixed',
      right: 16,
      bottom: 16,
      zIndex: 30,
      maxWidth: 'calc(100vw - 32px)'
    }
  }, "Kvittering er sendt p\xE5 e-post."));
}
window.Gaming = Gaming;
})(); } catch (e) { __ds_ns.__errors.push({ path: "publish/js/Gaming.babel.js", error: String((e && e.message) || e) }); }

// publish/js/Header.babel.js
try { (() => {
function Header({
  view,
  onNav,
  onLogin
}) {
  const {
    Button
  } = window.HUBDesignSystem_d87c4c;
  const links = [['Sport', 'sport'], ['Gaming', 'gaming'], ['Mat', 'menu'], ['Rom', 'roomsInfo'], ['Selskap og bedrift', 'selskap']];
  const cur = view === 'bedrift' ? 'selskap' : view;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'var(--hub-ink)',
      borderBottom: '1px solid var(--hub-ink-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-hdr",
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 var(--page-margin)',
      height: 68,
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo/hub-logo-pink.svg",
    alt: "HUB",
    onClick: () => onNav('home'),
    style: {
      height: 30,
      cursor: 'pointer'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    className: "hub-nav",
    style: {
      display: 'flex',
      gap: 24,
      flex: 1,
      fontSize: 15,
      fontWeight: 500,
      overflowX: 'auto'
    }
  }, links.map(([l, v]) => /*#__PURE__*/React.createElement("a", {
    key: v,
    onClick: () => onNav(v),
    style: {
      color: cur === v ? 'var(--hub-cream)' : 'var(--hub-grey-300)',
      textDecoration: 'none',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      boxShadow: cur === v ? '0 2px 0 var(--hub-pink)' : 'none',
      paddingBottom: 2
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    tone: "dark",
    onClick: onLogin
  }, "Logg inn")));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "publish/js/Header.babel.js", error: String((e && e.message) || e) }); }

// publish/js/Home.babel.js
try { (() => {
const HUB_LEAGUE_LOGO = {
  'Premier League': 'premier-league.png',
  'Champions League': 'champions-league.svg',
  'Formel 1': 'formel-1.svg',
  'Eliteserien': 'eliteserien.png',
  'Bundesliga': 'bundesliga.png',
  'LaLiga': 'laliga.png',
  'Serie A': 'serie-a.png',
  'Ligue 1': 'ligue-1.png',
  'NBA': 'nba.png',
  'NHL': 'nhl.png',
  'NFL': 'nfl.png',
  'EHF EURO 2026': 'ehf-euro.png',
  'ATP Basel': 'atp.png',
  'PDC European Championship': 'pdc.png',
  'LoL Worlds': 'lol-worlds.png',
  'UFC': 'ufc.png',
  'MotoGP': 'motogp.png',
  'Alpint verdenscup': 'fis.svg'
};
function LeagueLogo({
  league
}) {
  const file = HUB_LEAGUE_LOGO[league];
  const abbr = league.split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase();
  return /*#__PURE__*/React.createElement("div", {
    className: "hub-logo",
    style: {
      width: 56,
      height: 56,
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      border: file ? 0 : '2px solid var(--hub-ink-line)'
    }
  }, file ? /*#__PURE__*/React.createElement("img", {
    src: `assets/leagues/${file}`,
    alt: league,
    style: {
      maxWidth: 48,
      maxHeight: 44,
      objectFit: 'contain'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--hub-grey-400)'
    }
  }, abbr));
}
function MatchRow({
  m,
  onPick,
  compact
}) {
  const {
    Badge,
    Button
  } = window.HUBDesignSystem_d87c4c;
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "hub-matchrow",
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    onClick: () => onPick(m),
    style: {
      display: 'grid',
      gridTemplateColumns: '140px 56px minmax(0,1fr) auto',
      alignItems: 'center',
      gap: compact ? 16 : 24,
      padding: compact ? '10px 0' : '20px 0',
      borderTop: '1px solid var(--hub-ink-3)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--hub-cream)'
    }
  }, m.day), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-400)'
    }
  }, m.time)), /*#__PURE__*/React.createElement(LeagueLogo, {
    league: m.league
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      flexWrap: 'wrap',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--hub-grey-400)'
    }
  }, m.league), m.big && /*#__PURE__*/React.createElement(Badge, null, "Storkamp")), /*#__PURE__*/React.createElement("div", {
    className: "hub-mtitle",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: compact ? 18 : 24,
      letterSpacing: '-0.015em',
      color: h ? 'var(--hub-pink-light)' : 'var(--hub-cream)',
      transition: 'color var(--duration-fast)'
    }
  }, m.away ? `${m.home} – ${m.away}` : m.home)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: h ? 'primary' : 'outline',
    tone: "dark",
    iconRight: "arrow-right"
  }, "Velg rom"));
}
function Home({
  onPick,
  onNav = () => {}
}) {
  const {
    Eyebrow,
    Tag,
    Button,
    Card
  } = window.HUBDesignSystem_d87c4c;
  const [sport, setSport] = React.useState('Alle');
  const list = window.HUB_DATA.matches.filter(m => sport === 'Alle' || m.sport === sport).slice().sort((a, b) => parseInt(a.day.match(/\d+/)) - parseInt(b.day.match(/\d+/)) || a.time.localeCompare(b.time));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "hub-hero",
    style: {
      position: 'relative',
      minHeight: 560,
      display: 'flex',
      alignItems: 'flex-end',
      background: 'url(assets/images/fasade.avif) center 40%/cover'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(23,20,26,0) 30%, rgba(23,20,26,.92) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1200,
      width: '100%',
      margin: '0 auto',
      padding: '0 var(--page-margin) 56px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark",
    style: {
      marginBottom: 14
    }
  }, "Private kamprom og gamingrom"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(36px,6vw,84px)',
      lineHeight: 1.02,
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--hub-cream)',
      maxWidth: 820,
      textWrap: 'balance'
    }
  }, "Ditt eget kamprom. Book det med gjengen."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 28px',
      fontSize: 'clamp(16px,2.2vw,19px)',
      lineHeight: 1.5,
      color: 'var(--hub-grey-300)',
      maxWidth: 620
    }
  }, "Private rom for vennegjenger med storskjerm, god lyd, gode sofaer og mat servert p\xE5 rommet. Booket p\xE5 forh\xE5nd, bare for dere."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-down",
    onClick: () => window.scrollTo({
      top: 560,
      behavior: 'smooth'
    })
  }, "Finn en kamp"))), /*#__PURE__*/React.createElement("section", {
    className: "hub-sec",
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '72px var(--page-margin)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "Kamper"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 24px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(30px,5vw,44px)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--hub-cream)'
    }
  }, "Kommende sendinger"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 20
    }
  }, ['Alle', 'Fotball', 'Håndball', 'Vintersport', 'Motorsport', 'Tennis', 'Kampsport', 'Darts', 'E-sport', 'USA-sport'].map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    tone: "dark",
    selected: sport === s,
    onClick: () => setSport(s)
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--hub-ink-3)'
    }
  }, list.slice(0, 8).map(m => /*#__PURE__*/React.createElement(MatchRow, {
    key: m.id,
    m: m,
    onPick: onPick
  }))), list.length > 8 && /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    tone: "dark",
    iconRight: "arrow-right",
    onClick: () => onNav('sport'),
    style: {
      marginTop: 24
    }
  }, "Se alle ", list.length, " sendinger")), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--hub-cream)',
      color: 'var(--hub-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-sec",
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '72px var(--page-margin)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Mer enn kamp"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 36px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(30px,5vw,44px)',
      letterSpacing: 'var(--tracking-display)',
      textWrap: 'balance'
    }
  }, "Book rommet til noe annet ogs\xE5"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
      gap: 16
    }
  }, [['For bedrifter', 'Bedrift', 'Møter, kick-off og teambuilding med storskjerm og servering.', 'Ta kontakt', 'bedrift'], ['For gjengen', 'Gaming', 'Konsoll, simracing og quiz på storskjerm med god lyd.', 'Book rom', 'gaming'], ['For anledningen', 'Selskap', 'Bursdag, utdrikningslag eller julebord. Vi ordner maten.', 'Ta kontakt', 'selskap']].map(([when, t, d, cta, v]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    variant: "accent",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--hub-grey-600)'
    }
  }, when), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      letterSpacing: '-0.015em'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--hub-grey-700)',
      fontSize: 16,
      lineHeight: 1.5,
      flex: 1
    }
  }, d), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconRight: "arrow-right",
    onClick: () => onNav(v),
    style: {
      alignSelf: 'flex-start',
      marginTop: 8
    }
  }, cta)))))));
}
Object.assign(window, {
  Home,
  LeagueLogo,
  MatchRow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "publish/js/Home.babel.js", error: String((e && e.message) || e) }); }

// publish/js/Inquiry.babel.js
try { (() => {
const HUB_INQUIRY = {
  bedrift: {
    eyebrow: 'For bedrifter',
    title: 'Møterom med storskjerm og mat på bordet',
    lead: 'Book et rom til kick-off, kundekveld eller teambuilding. Skjermen tar HDMI og trådløs deling, og vi serverer når det passer dere.',
    packages: [['Dagmøte', '4 timer, kaffe hele dagen og lunsj', 'fra kr 395 per person'], ['Kundekveld', 'Kamp på skjermen, pizza og to enheter drikke', 'fra kr 545 per person'], ['Hele lokalet', 'Alle tre rommene og baren, opptil 36 personer', 'pris på forespørsel']],
    fields: ['Bedrift', 'Kontaktperson', 'E-post'],
    cta: 'Send forespørsel'
  },
  selskap: {
    eyebrow: 'For anledningen',
    title: 'Bursdag, utdrikningslag eller julebord',
    lead: 'Dere får rommet for dere selv, vi ordner maten. Sett på en kamp, spill eller ta med egen playlist.',
    packages: [['Bursdag', '3 timer, pizza og brus. Kake kan bestilles', 'fra kr 295 per person'], ['Utdrikningslag', 'Rom, quiz på skjermen, bøtte med øl og snacks', 'fra kr 445 per person'], ['Julebord', 'Treretters eller pizzabuffet, drikkepakke', 'fra kr 695 per person']],
    fields: ['Navn', 'E-post', 'Telefon'],
    cta: 'Send forespørsel'
  }
};
function Inquiry({
  kind,
  onKind
}) {
  const {
    Eyebrow,
    Card,
    Input,
    Select,
    Stepper,
    Button,
    Toast,
    Tag
  } = window.HUBDesignSystem_d87c4c;
  const c = HUB_INQUIRY[kind];
  const [pkg, setPkg] = React.useState(0);
  const [guests, setGuests] = React.useState(kind === 'bedrift' ? 12 : 8);
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    setPkg(0);
    setSent(false);
  }, [kind]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--hub-cream)',
      color: 'var(--hub-ink)',
      minHeight: 'calc(100vh - 68px)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    className: "hub-sec",
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '56px var(--page-margin) 96px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Selskap og bedrift"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '8px 0 12px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(38px,5vw,56px)',
      letterSpacing: 'var(--tracking-display)',
      maxWidth: 820,
      textWrap: 'balance'
    }
  }, "Book rom til arrangementet"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      fontSize: 'clamp(16px,2.2vw,18px)',
      lineHeight: 1.5,
      color: 'var(--hub-grey-700)',
      maxWidth: 640
    }
  }, "Fra bursdag og utdrikningslag til kick-off og kundekveld. Dere f\xE5r rommet for dere selv, vi ordner maten."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 32
    }
  }, [['selskap', 'Privat selskap'], ['bedrift', 'Bedrift']].map(([k, l]) => /*#__PURE__*/React.createElement(Tag, {
    key: k,
    selected: kind === k,
    onClick: () => onKind && onKind(k)
  }, l))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      fontSize: 16,
      lineHeight: 1.5,
      color: 'var(--hub-grey-700)',
      maxWidth: 640
    }
  }, c.lead), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))',
      gap: 'clamp(28px,5vw,40px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 8px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: '-0.015em',
      paddingBottom: 10,
      borderBottom: '3px solid var(--hub-pink)'
    }
  }, "Pakker"), c.packages.map(([n, d, p], i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: "hub-pkg",
    onClick: () => setPkg(i),
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      padding: '18px 16px',
      margin: '0 -16px',
      borderBottom: '1px solid var(--hub-cream-line)',
      cursor: 'pointer',
      background: pkg === i ? 'var(--hub-white)' : 'transparent',
      boxShadow: pkg === i ? 'inset 4px 0 0 var(--hub-pink)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 17
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-700)',
      marginTop: 2
    }
  }, d)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--hub-grey-700)',
      textAlign: 'right'
    }
  }, p)))), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, sent ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Toast, {
    kind: "success",
    title: "Foresp\xF8rselen er sendt",
    style: {
      width: '100%'
    }
  }, "Vi svarer innen \xE9n virkedag med tilbud og ledige datoer."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false),
    style: {
      alignSelf: 'flex-start'
    }
  }, "Send en til")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: '-0.015em'
    }
  }, c.packages[pkg][0]), /*#__PURE__*/React.createElement("div", {
    className: "hub-2col",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Dato",
    type: "date"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Tidspunkt",
    options: ['Formiddag', 'Ettermiddag', 'Kveld']
  })), /*#__PURE__*/React.createElement(Stepper, {
    label: "Antall personer",
    value: guests,
    min: 2,
    max: 36,
    onChange: setGuests,
    style: {
      display: 'flex'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,180px),1fr))',
      gap: 14
    }
  }, c.fields.map(f => /*#__PURE__*/React.createElement(Input, {
    key: f,
    label: f
  }))), /*#__PURE__*/React.createElement(Input, {
    label: "Noe vi b\xF8r vite?",
    placeholder: "Allergier, \xF8nsker, spesielle behov"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => setSent(true),
    style: {
      alignSelf: 'stretch'
    }
  }, c.cta))))));
}
window.Inquiry = Inquiry;
})(); } catch (e) { __ds_ns.__errors.push({ path: "publish/js/Inquiry.babel.js", error: String((e && e.message) || e) }); }

// publish/js/Menu.babel.js
try { (() => {
const HUB_MENU = {
  Mat: {
    intro: 'Alt serveres på rommet. Pizzaene er steinovnsbakt, 30 cm, og holder til to. Alle pizzaer kan fås med glutenfri bunn uten tillegg.',
    cols: [['Pizza'], ['Burgere og retter', 'Tilbehør']],
    groups: [{
      title: 'Pizza',
      items: [['El Clásico', 'Tomatsaus, mozzarella og basilikum', 179, 'Real Madrid – Barcelona', ['Gluten', 'Melk'], ['Glutenfri', 'Laktosefri', 'Vegansk']], ['Hudson River Derby', 'Tomatsaus, mozzarella og pepperoni', 199, 'New York Red Bulls – NYCFC', ['Gluten', 'Melk'], ['Glutenfri', 'Laktosefri']], ['Derby della Madonnina', 'Salami Milano, mozzarella og chili', 199, 'Inter – AC Milan', ['Gluten', 'Melk'], ['Glutenfri', 'Laktosefri']], ['Kıtalararası Derbi', 'Kebabkjøtt, rødløk, jalapeños og hvitløksdressing', 219, 'Fenerbahçe – Galatasaray', ['Gluten', 'Melk', 'Egg', 'Sennep'], ['Glutenfri', 'Laktosefri', 'Eggfri']], ['El Tráfico', 'Krydret kjøttdeig, mais, nachos og rømme', 219, 'LA Galaxy – LAFC', ['Gluten', 'Melk', 'Selleri'], ['Glutenfri', 'Laktosefri']], ['Revierderby', 'Currywurst, karriketchup og sprøstekt løk', 209, 'Dortmund – Schalke', ['Gluten', 'Melk', 'Sennep', 'Selleri'], ['Glutenfri', 'Laktosefri']], ['Old Firm', 'Pulled pork, whisky-BBQ, rødløk og cheddar', 229, 'Celtic – Rangers', ['Gluten', 'Melk', 'Sennep'], ['Glutenfri', 'Laktosefri']], ['Derby della Capitale', 'Carbonara med guanciale, pecorino og eggeplomme', 229, 'Roma – Lazio', ['Gluten', 'Melk', 'Egg'], ['Glutenfri', 'Laktosefri']], ['Superclásico', 'Biff, chimichurri, rødløk og mozzarella', 239, 'Boca Juniors – River Plate', ['Gluten', 'Melk'], ['Glutenfri', 'Laktosefri']], ['Derby della Lanterna', 'Pesto, grillede grønnsaker og mozzarella (vegetar)', 209, 'Genoa – Sampdoria', ['Gluten', 'Melk', 'Nøtter'], ['Glutenfri', 'Laktosefri', 'Vegansk', 'Nøttefri']], ['Tyne-Wear Derby', 'Sprøstekt kylling, ostesaus, cheddar og vårløk', 219, 'Newcastle – Sunderland', ['Gluten', 'Melk', 'Egg'], ['Glutenfri', 'Laktosefri']]]
    }, {
      title: 'Burgere og retter',
      items: [['Smashburger', 'Cheddar, sylteagurk og husets dressing, med pommes', 189, null, ['Gluten', 'Melk', 'Egg', 'Sennep', 'Sesam'], ['Glutenfri', 'Laktosefri', 'Sesamfri']], ['Dobbel smash', 'To burgere, bacon og cheddar, med pommes', 229, null, ['Gluten', 'Melk', 'Egg', 'Sennep', 'Sesam'], ['Glutenfri', 'Laktosefri', 'Sesamfri']], ['Halloumiburger', 'Coleslaw og chilimajones, med pommes (vegetar)', 179, null, ['Gluten', 'Melk', 'Egg', 'Sennep', 'Sesam'], ['Glutenfri', 'Vegansk med plantebasert burger']], ['Kyllingvinger', '12 stk, BBQ eller hot', 179, null, ['Sennep', 'Selleri']]]
    }, {
      title: 'Tilbehør',
      items: [['Loaded fries', 'Cheddar, jalapeños og rømme', 129, null, ['Melk'], ['Laktosefri', 'Vegansk']], ['Løkringer', 'Med aioli', 89, null, ['Gluten', 'Egg', 'Melk'], ['Glutenfri']], ['Hvitløksdressing', 'Eller chiliolje', 25, null, ['Egg', 'Sennep'], ['Vegansk']], ['Hvitløksbrød', 'Med smeltet ost', 79, null, ['Gluten', 'Melk'], ['Glutenfri', 'Laktosefri']]]
    }]
  },
  Drikke: {
    intro: 'Bestilles fra skjermen i rommet og kommer på bordet.',
    cols: [['Øl og cider', 'Vin'], ['Drinker', 'Alkoholfritt']],
    groups: [{
      title: 'Drinker',
      items: [['Red Devils', 'Tequila, blodappelsin, lime og chili', 159, 'Manchester United', null], ['Sky Blues', 'Vodka, blå curaçao, sitron og tonic', 149, 'Manchester City', null], ['The Toffees', 'Bourbon, toffeesirup, sitron og eggehvite', 159, 'Everton', ['Egg'], ['Vegansk']], ['The Magpies', 'Vodka, kaffelikør og espresso med hvitt skum', 159, 'Newcastle United', null], ['Black Cats', 'Mørk rom, ingefærøl og lime', 149, 'Sunderland', null], ['The Cherries', 'Gin, kirsebærlikør og sitron', 149, 'Bournemouth', null], ['The Canaries', 'Limoncello, prosecco og soda', 149, 'Norwich City', ['Sulfitt']], ['Galácticos', 'Cava med ferskenpuré og gullglitter', 159, 'Real Madrid', ['Sulfitt']], ['Blaugrana', 'Vodka, blåbær og granateple', 149, 'Barcelona', null], ['Rossoneri', 'Campari, rød vermut og soda', 149, 'AC Milan', ['Sulfitt']], ['La Vecchia Signora', 'Old fashioned med bourbon, bitter og appelsin', 169, 'Juventus', null], ['Schwarzgelben', 'Jägermeister, ananas og lime', 149, 'Borussia Dortmund', null], ['Les Phocéens', 'Pastis, mynte, sitron og isvann', 139, 'Marseille', null]]
    }, {
      title: 'Alkoholfritt',
      items: [['Erdinger Alkoholfrei', 'Alkoholfri hvete, 0,5 l', 79, null, ['Gluten']], ['Brus', '0,5 l', 45], ['Energidrikk', '0,33 l', 49], ['Kaffe', 'Kanne til bordet', 89]]
    }, {
      title: 'Øl og cider',
      items: [['Carlsberg', 'Pils fra fat, 0,5 l', 109, null, ['Gluten']], ['Heineken', 'Pils fra fat, 0,5 l', 115, null, ['Gluten']], ['Ringnes', 'Pils fra fat, 0,5 l', 105, null, ['Gluten']], ['Guinness', 'Stout fra fat, 0,5 l', 129, null, ['Gluten']], ['Amstel', 'Lager, flaske 0,33 l', 95, null, ['Gluten']], ['Bitburger', 'Pils, flaske 0,33 l', 99, null, ['Gluten']], ['Brahma', 'Lager, flaske 0,35 l', 95, null, ['Gluten']], ['Estrella Damm', 'Lager, flaske 0,33 l', 99, null, ['Gluten']], ['Newcastle Brown Ale', 'Brown ale, flaske 0,33 l', 109, null, ['Gluten']], ['Daura Damm', 'Glutenfri lager, flaske 0,33 l', 99, null, null], ['Peroni Nastro Azzurro', 'Lager, flaske 0,33 l', 99, null, ['Gluten']], ['Cider', '0,33 l', 99, null, ['Sulfitt']], ['Bøtte', '6 valgfrie flasker på is', 499, null, ['Gluten']]]
    }, {
      title: 'Vin',
      items: [['Hvitvin', 'Glass, 15 cl', 129, null, ['Sulfitt']], ['Rødvin', 'Glass, 15 cl', 129, null, ['Sulfitt']], ['Rosé', 'Glass, 15 cl', 129, null, ['Sulfitt']], ['Prosecco', 'Glass, 12 cl', 139, null, ['Sulfitt']], ['Hvitvin, flaske', '75 cl', 549, null, ['Sulfitt']], ['Rødvin, flaske', '75 cl', 549, null, ['Sulfitt']], ['Prosecco, flaske', '75 cl', 599, null, ['Sulfitt']]]
    }]
  },
  Snacks: {
    intro: 'Til kampstart eller gaming. Kommer på bordet når du vil.',
    cols: [['Til deling'], ['Søtt']],
    groups: [{
      title: 'Til deling',
      items: [['Nachos', 'Ost, salsa, guacamole og rømme', 159, null, ['Melk'], ['Laktosefri', 'Vegansk']], ['Popcorn', 'Stor bolle, salt eller karamell', 59, null, ['Melk'], ['Laktosefri']], ['Chips og dip', 'To poser og to dipper', 79, null, ['Melk'], ['Laktosefri']], ['Nøttemiks', 'Saltede nøtter', 49, null, ['Peanøtter', 'Nøtter']]]
    }, {
      title: 'Søtt',
      items: [['Godteskål', 'Blandet smågodt til bordet', 99, null, ['Gluten', 'Melk', 'Soya'], ['Glutenfri', 'Vegansk']], ['Sorbet', 'Tre kuler: mango, bringebær og sitron', 89, null, null], ['Brownies', '4 stk', 109, null, ['Gluten', 'Melk', 'Egg', 'Soya', 'Nøtter'], ['Glutenfri', 'Nøttefri']]]
    }]
  }
};
[['Mat', 'Pizza'], ['Drikke', 'Drinker']].forEach(([t, g]) => HUB_MENU[t].groups.find(x => x.title === g).items.sort((a, b) => {
  const k = s => s.replace(/^(the|la|le|les|el|los|las|il|die|der|das)\s+/i, '');
  return k(a[0]).localeCompare(k(b[0]), 'nb');
}));
const HUB_MENU_NO = (() => {
  let i = 0;
  const map = {};
  ['Mat', 'Drikke', 'Snacks'].forEach(k => HUB_MENU[k].groups.forEach(g => {
    if (k === 'Drikke' && g.title !== 'Drinker') return;
    g.items.forEach(it => {
      map[it[0]] = ++i;
    });
  }));
  return map;
})();
const HUB_MENU_TAGS = {
  'Derby della Madonnina': ['hot'],
  'Kıtalararası Derbi': ['hot'],
  'El Tráfico': ['hot'],
  'Kyllingvinger': ['hot'],
  'Red Devils': ['hot'],
  'El Clásico': ['veg'],
  'Derby della Lanterna': ['veg'],
  'Hvitløksbrød': ['veg'],
  'Løkringer': ['veg'],
  'Popcorn': ['veg'],
  'Chips og dip': ['veg'],
  'Brownies': ['veg'],
  'Halloumiburger': ['veg', 'hot'],
  'Loaded fries': ['veg', 'hot'],
  'Nachos': ['veg'],
  'Sorbet': ['vegan'],
  'Nøttemiks': ['vegan']
};
const HUB_TAG_ICON = {
  hot: ['flame', 'Sterk', '#c8442b'],
  veg: ['leaf', 'Vegetar', '#3f8a4f'],
  vegan: ['sprout', 'Vegansk', '#2f7a3f']
};
function MenuHeading({
  title,
  first
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: first ? '0 0 8px' : '32px 0 8px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: '-0.015em',
      paddingBottom: 10,
      borderBottom: '3px solid var(--hub-pink)'
    }
  }, title);
}
function MenuItem({
  it
}) {
  const {
    Icon
  } = window.HUBDesignSystem_d87c4c;
  const [n, d, p, t, al, alt] = it;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'clamp(10px,2vw,16px)',
      alignItems: 'baseline',
      padding: '14px 0',
      borderBottom: '1px solid var(--hub-cream-line)'
    }
  }, HUB_MENU_NO[n] && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      flex: 'none',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--hub-pink-deep)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, HUB_MENU_NO[n]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontWeight: 700,
      fontSize: 16
    }
  }, n, (HUB_MENU_TAGS[n] || []).map(k => /*#__PURE__*/React.createElement("span", {
    key: k,
    title: HUB_TAG_ICON[k][1],
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: HUB_TAG_ICON[k][0],
    size: 16,
    color: HUB_TAG_ICON[k][2]
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-700)',
      marginTop: 2
    }
  }, d), t && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--hub-grey-600)',
      marginTop: 4
    }
  }, t), alt && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--hub-pink-deep)',
      marginTop: 4
    }
  }, "Kan f\xE5s: ", alt.join(' · ').toLowerCase().replace(/^./, c => c.toUpperCase())), al && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 4,
      marginTop: 6
    }
  }, al.map(a => /*#__PURE__*/React.createElement("span", {
    key: a,
    style: {
      fontSize: 11,
      fontWeight: 600,
      lineHeight: '18px',
      padding: '0 6px',
      border: '1px solid var(--hub-cream-line)',
      color: 'var(--hub-grey-700)'
    }
  }, a)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: 'nowrap'
    }
  }, kr(p)));
}
function Menu({
  onBook
}) {
  const {
    Eyebrow,
    Tabs,
    Button,
    Icon
  } = window.HUBDesignSystem_d87c4c;
  const [tab, setTab] = React.useState('Mat');
  const [narrow, setNarrow] = React.useState(window.innerWidth < 768);
  React.useEffect(() => {
    const f = () => setNarrow(window.innerWidth < 768);
    window.addEventListener('resize', f);
    return () => window.removeEventListener('resize', f);
  }, []);
  const sec = HUB_MENU[tab];
  const byTitle = Object.fromEntries(sec.groups.map(g => [g.title, g]));
  const cols = (narrow ? [sec.cols.flat()] : sec.cols).map(titles => titles.flatMap((ti, gi) => [{
    h: ti,
    first: gi === 0
  }, ...byTitle[ti].items.map(it => ({
    it
  }))]));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--hub-cream)',
      color: 'var(--hub-ink)',
      minHeight: 'calc(100vh - 68px)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    className: "hub-sec",
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '56px var(--page-margin) 96px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Mat"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '8px 0 12px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(34px,6vw,52px)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, "Mat, drikke og snacks"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 32px',
      fontSize: 18,
      lineHeight: 1.5,
      color: 'var(--hub-grey-700)',
      maxWidth: 640
    }
  }, "Dette kan du bestille p\xE5 rommet."), /*#__PURE__*/React.createElement(Tabs, {
    items: Object.keys(HUB_MENU),
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 8px',
      fontSize: 16,
      color: 'var(--hub-grey-700)',
      maxWidth: 640
    }
  }, sec.intro), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap',
      fontSize: 13,
      color: 'var(--hub-grey-700)'
    }
  }, Object.values(HUB_TAG_ICON).map(([ic, l, c]) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 16,
    color: c
  }), l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${cols.length},minmax(0,1fr))`,
      columnGap: 'clamp(32px,5vw,56px)',
      marginTop: 24
    }
  }, cols.map((cells, ci) => /*#__PURE__*/React.createElement("div", {
    key: ci,
    style: {
      minWidth: 0
    }
  }, cells.map((c, ri) => c.h ? /*#__PURE__*/React.createElement(MenuHeading, {
    key: ri,
    title: c.h,
    first: c.first
  }) : /*#__PURE__*/React.createElement(MenuItem, {
    key: ri,
    it: c.it
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      flexWrap: 'wrap',
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right",
    onClick: onBook
  }, "Book rom"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-600)'
    }
  }, "Allergener er merket p\xE5 hver rett, og de fleste kan lages glutenfrie eller laktosefrie. Sp\xF8r oss om du er usikker."))));
}
window.Menu = Menu;
})(); } catch (e) { __ds_ns.__errors.push({ path: "publish/js/Menu.babel.js", error: String((e && e.message) || e) }); }

// publish/js/RoomPicker.babel.js
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function RoomPicker({
  match,
  onBack,
  onPick
}) {
  const {
    Eyebrow,
    RoomCard,
    Button,
    Stepper
  } = window.HUBDesignSystem_d87c4c;
  const [hours, setHours] = React.useState(3);
  const [sel, setSel] = React.useState(null);
  const rooms = window.HUB_DATA.rooms;
  const room = rooms.find(r => r.id === sel);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '48px var(--page-margin) 180px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    tone: "dark",
    size: "sm",
    icon: "arrow-left",
    onClick: onBack,
    style: {
      marginLeft: -14
    }
  }, "Alle kamper"), /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark",
    style: {
      margin: '24px 0 8px'
    }
  }, match.league, " \xB7 ", match.day, " \xB7 ", match.time), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(32px,6vw,52px)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--hub-cream)'
    }
  }, match.away ? `${match.home} – ${match.away}` : match.home), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 36px',
      fontSize: 17,
      color: 'var(--hub-grey-300)'
    }
  }, "Velg rom og hvor lenge dere vil v\xE6re."), [['Sportsrom', 'For 6 til 16 personer', rooms.filter(r => !r.type)], ['Gamingrom', 'Mindre rom for 4 til 6, med konsoll og PC', rooms.filter(r => r.type === 'gaming')]].map(([t, sub, list]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 14,
      flexWrap: 'wrap',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      letterSpacing: '-0.015em',
      color: 'var(--hub-cream)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-400)'
    }
  }, sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
      gap: 20
    }
  }, list.map(r => {
    const sold = (r.soldOut || []).includes(match.id);
    return /*#__PURE__*/React.createElement(RoomCard, _extends({
      key: r.id
    }, r, {
      club: r.type === 'gaming' ? 'Konsoll og PC' : 'Storskjerm og surroundlyd',
      closed: null,
      number: null,
      price: `${kr(r.perHour)} / t`,
      status: sold ? 'Utsolgt' : 'Ledig',
      selected: sel === r.id,
      onClick: sold ? undefined : () => setSel(r.id),
      style: {
        opacity: sold ? 0.5 : 1
      }
    }));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      background: 'var(--hub-ink-2)',
      borderTop: '3px solid var(--hub-pink)',
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-bar",
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '14px var(--page-margin)',
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-bar-info",
    style: {
      flex: 1,
      color: 'var(--hub-cream)',
      fontSize: 15
    }
  }, room ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, room.name), " \xB7 ", room.capacity) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--hub-grey-400)'
    }
  }, "Ingen rom valgt")), /*#__PURE__*/React.createElement(Stepper, {
    label: "Timer",
    value: hours,
    min: 2,
    max: 6,
    onChange: setHours,
    tone: "dark"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--hub-cream)',
      minWidth: 110,
      textAlign: 'right'
    }
  }, room ? kr(room.perHour * hours) : '–'), /*#__PURE__*/React.createElement(Button, {
    disabled: !room,
    iconRight: "arrow-right",
    onClick: () => onPick(room, hours)
  }, "Velg mat"))));
}
window.RoomPicker = RoomPicker;
})(); } catch (e) { __ds_ns.__errors.push({ path: "publish/js/RoomPicker.babel.js", error: String((e && e.message) || e) }); }

// publish/js/Rooms.babel.js
try { (() => {
function Rooms({
  onBook,
  onGaming,
  onSim
}) {
  const {
    Eyebrow,
    Button,
    Icon,
    Tag
  } = window.HUBDesignSystem_d87c4c;
  const all = window.HUB_DATA.rooms;
  const groups = [['Sportsrom', 'Private rom med storskjerm for kamper og sendinger. Plass til 6 til 16 personer.', all.filter(r => !r.type)], ['Gaming og simracing', 'Mindre rom med konsoll og PC, og simracing med seks rigger side om side.', all.filter(r => r.type)]];
  const kit = [['tv', 'Storskjerm'], ['volume-2', 'Surroundlyd'], ['gamepad-2', 'PS5 og Xbox'], ['tablet', 'Bestill mat fra skjermen'], ['wifi', 'Wifi og HDMI'], ['lock', 'Bare dere i rommet']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "hub-sec",
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '56px var(--page-margin) 72px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "Rom"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '8px 0 8px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(38px,5vw,56px)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--hub-cream)'
    }
  }, "Finn rommet som passer gjengen"), groups.map(([title, sub, rooms]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 6px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(26px,4vw,32px)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--hub-cream)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      fontSize: 16,
      color: 'var(--hub-grey-300)'
    }
  }, sub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,280px),1fr))',
      gap: 'clamp(16px,3vw,24px)'
    }
  }, rooms.map(r => {
    const g = r.type === 'gaming',
      sim = r.type === 'sim';
    return /*#__PURE__*/React.createElement("article", {
      key: r.id,
      style: {
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--hub-ink-2)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: '16/10',
        background: r.image ? `url(${r.image}) center/cover var(--hub-ink)` : 'var(--hub-ink-3)',
        display: 'grid',
        placeItems: 'center'
      }
    }, !r.image && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 13,
        color: 'var(--hub-grey-400)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "image",
      size: 18
    }), "Bilde kommer")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '18px 20px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--hub-grey-400)'
      }
    }, sim ? 'Simracing' : g ? 'Gaming' : 'Sportsrom'), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 24,
        letterSpacing: '-0.015em',
        color: 'var(--hub-cream)'
      }
    }, r.name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4px 16px',
        fontSize: 14,
        color: 'var(--hub-grey-300)',
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 16
    }), r.capacity), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: sim ? 'gauge' : g ? 'gamepad-2' : 'tv',
      size: 16
    }), sim ? 'Ratt og pedaler' : g ? 'Konsoll og PC' : 'Storskjerm')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        marginTop: 'auto',
        paddingTop: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: 'var(--hub-cream)'
      }
    }, sim && /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 400,
        color: 'var(--hub-grey-400)',
        fontSize: 14
      }
    }, "fra "), kr(r.perHour), " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 400,
        color: 'var(--hub-grey-400)',
        fontSize: 14
      }
    }, "/ ", sim ? 'rigg / time' : 'time')), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      tone: "dark",
      iconRight: "arrow-right",
      onClick: sim ? onSim : g ? onGaming : onBook
    }, g || sim ? 'Book' : 'Velg kamp'))));
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--hub-cream)',
      color: 'var(--hub-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-sec",
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '56px var(--page-margin)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 28px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 32,
      letterSpacing: 'var(--tracking-display)'
    }
  }, "Inkludert i alle rom"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))',
      gap: '16px 32px'
    }
  }, kit.map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      paddingBottom: 16,
      borderBottom: '1px solid var(--hub-cream-line)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22,
    color: "var(--hub-pink-deep)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 16
    }
  }, t)))))));
}
window.Rooms = Rooms;
})(); } catch (e) { __ds_ns.__errors.push({ path: "publish/js/Rooms.babel.js", error: String((e && e.message) || e) }); }

// publish/js/Sport.babel.js
try { (() => {
const HUB_DUR = {
  Fotball: 120,
  'Håndball': 105,
  Motorsport: 120,
  Vintersport: 150,
  Tennis: 150,
  Darts: 240,
  Kampsport: 240,
  'E-sport': 180,
  'USA-sport': 195
};
const hubClock = mins => {
  const m = (mins % 1440 + 1440) % 1440;
  return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
};
const hubDur = m => {
  const h = Math.floor(m / 60),
    r = m % 60;
  return (h ? h + ' t' : '') + (r ? ' ' + r + ' min' : '');
};
function SportStep({
  n,
  title,
  children,
  aside
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--hub-ink-3)',
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginBottom: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 18,
      color: 'var(--hub-pink-light)'
    }
  }, n), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: '-0.015em',
      color: 'var(--hub-cream)'
    }
  }, title), aside && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-400)'
    }
  }, aside)), children);
}
function Sport({
  onDone
}) {
  const {
    Eyebrow,
    Stepper,
    Button,
    Icon,
    Badge,
    Checkbox,
    Tag,
    IconButton
  } = window.HUBDesignSystem_d87c4c;
  const dateRef = React.useRef(null);
  const D = window.HUB_DATA;
  const matches = D.matches.slice().sort((a, b) => parseInt(a.day.match(/\d+/)) - parseInt(b.day.match(/\d+/)) || a.time.localeCompare(b.time));
  const days = [...new Set(matches.map(m => m.day))];
  const rooms = D.rooms.filter(r => !r.type);
  const [day, setDay] = React.useState(days[0]);
  const [mid, setMid] = React.useState(matches.find(m => m.day === days[0]).id);
  const [sel, setSel] = React.useState(null);
  const [before, setBefore] = React.useState(30);
  const [after, setAfter] = React.useState(0);
  const [guests, setGuests] = React.useState(8);
  const [food, setFood] = React.useState({});
  const [drinks, setDrinks] = React.useState(false);
  const [league, setLeague] = React.useState(null);
  const [tour, setTour] = React.useState('Alle');
  const match = matches.find(m => m.id === mid);
  const sold = r => (r.soldOut || []).includes(mid);
  const room = rooms.find(r => r.id === sel && !sold(r));
  const dur = match.dur || HUB_DUR[match.sport] || 120;
  const [hh, mm] = match.time.split(':').map(Number);
  const start = hh * 60 + mm - before,
    end = hh * 60 + mm + dur + after;
  const hours = Math.ceil((end - start) / 30) / 2;
  const menu = [...D.food.map(f => ({
    ...f,
    unit: 'per person'
  })), ...D.pizzas.map(p => ({
    ...p,
    name: `${p.no}. ${p.name}`,
    desc: p.desc,
    unit: 'per pizza'
  }))];
  const foodSum = menu.reduce((s, f) => s + f.price * (food[f.id] || 0), 0);
  const roomSum = room ? Math.round(room.perHour * hours) : 0;
  const total = roomSum + foodSum + (drinks ? 690 : 0);
  const pickDay = d => {
    setDay(d);
    setTour('Alle');
    setMid(matches.find(m => m.day === d).id);
  };
  const dayList = matches.filter(m => m.day === day);
  const dayTours = [...new Set(dayList.map(m => m.league))];
  const shown = dayList.filter(m => tour === 'Alle' || m.league === tour);
  const pickMatch = m => {
    setDay(m.day);
    setTour('Alle');
    setMid(m.id);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const title = m => m.away ? `${m.home} – ${m.away}` : m.home;
  const leagues = [...new Map(matches.map(m => [m.league, m])).values()].map(m => ({
    name: m.league,
    sport: m.sport,
    n: matches.filter(x => x.league === m.league).length
  }));
  const list = matches.filter(m => !league || m.league === league);
  const sports = [...new Set(leagues.map(l => l.sport))];
  const [scat, setScat] = React.useState('Alle');
  const Line = ({
    a,
    b,
    strong
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      padding: '6px 0',
      fontSize: strong ? 18 : 14,
      fontWeight: strong ? 700 : 400
    }
  }, /*#__PURE__*/React.createElement("span", null, a), /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, b));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "hub-hide-sm",
    style: {
      background: 'var(--hub-ink-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '40px var(--page-margin) 40px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "Sport"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 8px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--hub-cream)'
    }
  }, "Turneringer"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      fontSize: 15,
      color: 'var(--hub-grey-300)'
    }
  }, "Dette viser vi. Velg en turnering for \xE5 se sendingene."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 24
    }
  }, ['Alle', ...sports].map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    tone: "dark",
    selected: scat === c,
    onClick: () => setScat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      columns: '260px 4',
      columnGap: 32
    }
  }, sports.filter(c => scat === 'Alle' || c === scat).map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      breakInside: 'avoid',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 4px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--hub-cream)',
      paddingBottom: 6,
      borderBottom: '3px solid var(--hub-pink)'
    }
  }, c), leagues.filter(l => l.sport === c).map(l => /*#__PURE__*/React.createElement("div", {
    key: l.name,
    onClick: () => setLeague(league === l.name ? null : l.name),
    style: {
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      padding: '8px 0',
      borderBottom: '1px solid var(--hub-ink-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: league === l.name ? 'var(--hub-pink-light)' : 'var(--hub-cream)',
      fontWeight: 600,
      fontSize: 15
    }
  }, l.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--hub-grey-400)',
      whiteSpace: 'nowrap'
    }
  }, l.n, " ", l.n === 1 ? 'sending' : 'sendinger')))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--hub-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '32px var(--page-margin) 48px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 12px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(32px,4vw,44px)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--hub-cream)'
    }
  }, "Se kampen i eget rom"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 20px',
      fontSize: 16,
      lineHeight: 1.5,
      color: 'var(--hub-grey-300)',
      maxWidth: 640
    }
  }, "Storskjerm, surroundlyd og mat servert p\xE5 rommet. Plass til 6 til 16 personer."), /*#__PURE__*/React.createElement("div", {
    className: "hub-split",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 340px',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-steps",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(SportStep, {
    n: "1",
    title: "Velg dato"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-left",
    label: "Tidligere datoer",
    tone: "dark",
    size: 36,
    onClick: () => dateRef.current.scrollBy({
      left: -280,
      behavior: 'smooth'
    })
  }), /*#__PURE__*/React.createElement("div", {
    ref: dateRef,
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      scrollbarWidth: 'none',
      flex: 1,
      minWidth: 0
    }
  }, days.map(d => {
    const [wd, ...rest] = d.split(' ');
    const on = d === day;
    return /*#__PURE__*/React.createElement("button", {
      key: d,
      onClick: () => pickDay(d),
      style: {
        cursor: 'pointer',
        flex: 'none',
        width: 64,
        padding: '6px 0',
        border: `2px solid ${on ? 'var(--hub-pink)' : 'var(--hub-ink-line)'}`,
        background: on ? 'var(--hub-pink)' : 'transparent',
        color: on ? 'var(--hub-white)' : 'var(--hub-cream)',
        fontFamily: 'var(--font-body)',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        opacity: 0.85
      }
    }, wd), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16
      }
    }, rest.join(' ')));
  })), /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-right",
    label: "Senere datoer",
    tone: "dark",
    size: 36,
    onClick: () => dateRef.current.scrollBy({
      left: 280,
      behavior: 'smooth'
    })
  }))), /*#__PURE__*/React.createElement(SportStep, {
    n: "2",
    title: "Velg sending",
    aside: `${dayList.length} sendinger ${day.toLowerCase()}`
  }, dayTours.length > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 10
    }
  }, ['Alle', ...dayTours].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    tone: "dark",
    selected: tour === t,
    onClick: () => setTour(t)
  }, t, t !== 'Alle' && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6,
      opacity: 0.6
    }
  }, dayList.filter(m => m.league === t).length)))), /*#__PURE__*/React.createElement("div", {
    className: "hub-step-list",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      maxHeight: 360,
      overflowY: 'auto'
    }
  }, shown.map(m => {
    const on = m.id === mid;
    return /*#__PURE__*/React.createElement("div", {
      key: m.id,
      onClick: () => setMid(m.id),
      style: {
        cursor: 'pointer',
        display: 'grid',
        gridTemplateColumns: '40px minmax(0,1fr) auto',
        gap: 12,
        alignItems: 'center',
        padding: '6px 12px',
        background: on ? 'var(--hub-ink-2)' : 'transparent',
        border: `2px solid ${on ? 'var(--hub-pink)' : 'var(--hub-ink-3)'}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        transform: 'scale(0.72)',
        transformOrigin: 'left center',
        width: 40
      }
    }, /*#__PURE__*/React.createElement(LeagueLogo, {
      league: m.league
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--hub-grey-400)'
      }
    }, m.league), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16,
        color: 'var(--hub-cream)'
      }
    }, title(m))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: 'var(--hub-cream)'
      }
    }, m.time), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--hub-grey-400)'
      }
    }, "ca. ", hubDur(m.dur || HUB_DUR[m.sport] || 120))));
  }))), /*#__PURE__*/React.createElement(SportStep, {
    n: "3",
    title: "Velg rom"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,150px),1fr))',
      gap: 10
    }
  }, rooms.map(r => {
    const so = sold(r);
    return /*#__PURE__*/React.createElement("div", {
      key: r.id,
      onClick: so ? undefined : () => setSel(r.id),
      style: {
        cursor: so ? 'default' : 'pointer',
        opacity: so ? 0.5 : 1,
        background: 'var(--hub-ink-3)',
        border: `3px solid ${room && room.id === r.id ? 'var(--hub-pink)' : 'transparent'}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 10px 10px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 15,
        color: 'var(--hub-cream)'
      }
    }, r.name), so && /*#__PURE__*/React.createElement(Badge, {
      color: "ink"
    }, "Utsolgt")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        columnGap: 8,
        fontSize: 13,
        color: 'var(--hub-grey-300)',
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        whiteSpace: 'nowrap'
      }
    }, r.capacity), /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--hub-cream)',
        whiteSpace: 'nowrap'
      }
    }, kr(r.perHour), " / t"))));
  }))), /*#__PURE__*/React.createElement(SportStep, {
    n: "4",
    title: "Tid",
    aside: `${hubClock(start)}–${hubClock(end)} · ${String(hours).replace('.', ',')} t`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 4,
      marginBottom: 12,
      height: 28,
      fontSize: 12,
      fontWeight: 600
    }
  }, before > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: before,
      background: 'var(--hub-ink-3)',
      color: 'var(--hub-grey-300)',
      display: 'grid',
      placeItems: 'center',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  }, "F\xF8r"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: dur,
      background: 'var(--hub-pink)',
      color: 'var(--hub-white)',
      display: 'grid',
      placeItems: 'center',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  }, match.time), after > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: after,
      background: 'var(--hub-ink-3)',
      color: 'var(--hub-grey-300)',
      display: 'grid',
      placeItems: 'center',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  }, "Etter")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    size: "sm",
    tone: "dark",
    label: "Ekstra tid f\xF8r",
    unit: "min",
    value: before,
    min: 0,
    max: 120,
    onChange: v => setBefore(Math.max(0, Math.min(120, before + (v > before ? 30 : -30))))
  }), /*#__PURE__*/React.createElement(Stepper, {
    size: "sm",
    tone: "dark",
    label: "Ekstra tid etter",
    unit: "min",
    value: after,
    min: 0,
    max: 120,
    onChange: v => setAfter(Math.max(0, Math.min(120, after + (v > after ? 30 : -30))))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--hub-grey-400)',
      marginTop: 8
    }
  }, "Rommet er booket for hele sendingen. Legg til tid f\xF8r eller etter i halvtimer.")), /*#__PURE__*/React.createElement(SportStep, {
    n: "5",
    title: "Gjester og mat",
    aside: "Valgfritt"
  }, /*#__PURE__*/React.createElement(Stepper, {
    size: "sm",
    tone: "dark",
    label: "Antall gjester",
    value: guests,
    min: 2,
    max: 16,
    onChange: setGuests,
    style: {
      display: 'flex',
      marginBottom: 8,
      maxWidth: 360
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hub-food",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,280px),1fr))',
      columnGap: 24
    }
  }, menu.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '6px 0',
      borderTop: '1px solid var(--hub-ink-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--hub-cream)'
    }
  }, f.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--hub-grey-400)'
    }
  }, f.desc, " \xB7 ", kr(f.price), " ", f.unit)), /*#__PURE__*/React.createElement(Stepper, {
    size: "sm",
    tone: "dark",
    value: food[f.id] || 0,
    min: 0,
    max: 14,
    onChange: v => setFood({
      ...food,
      [f.id]: v
    })
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 12,
      borderTop: '1px solid var(--hub-ink-3)'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    tone: "dark",
    checked: drinks,
    onChange: setDrinks,
    label: "Drikke p\xE5 bordet n\xE5r dere kommer \xB7 kr 690"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "hub-aside",
    style: {
      position: 'sticky',
      top: 92,
      background: 'var(--hub-ink-2)',
      borderTop: '3px solid var(--hub-pink)',
      padding: 24,
      color: 'var(--hub-cream)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "Din booking"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      margin: '8px 0 2px'
    }
  }, title(match)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-300)',
      marginBottom: 12
    }
  }, match.day, " \xB7 ", hubClock(start), "\u2013", hubClock(end)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--hub-ink-3)',
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement(Line, {
    a: room ? `${room.name} · ${String(hours).replace('.', ',')} t` : 'Rom ikke valgt',
    b: room ? kr(roomSum) : '–'
  }), foodSum > 0 && /*#__PURE__*/React.createElement(Line, {
    a: "Mat",
    b: kr(foodSum)
  }), drinks && /*#__PURE__*/React.createElement(Line, {
    a: "Drikke",
    b: kr(690)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--hub-ink-3)',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Line, {
    a: "Totalt",
    b: kr(total),
    strong: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--hub-grey-400)',
      textAlign: 'right'
    }
  }, kr(Math.round(total / guests)), " per person ved ", guests, " gjester")), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    disabled: !room,
    style: {
      marginTop: 18
    },
    onClick: () => onDone(match, room, {
      guests,
      total
    })
  }, "Betal og book"), !room && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--hub-grey-400)',
      marginTop: 8,
      textAlign: 'center'
    }
  }, "Velg et rom for \xE5 fortsette"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--hub-ink-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '40px var(--page-margin) 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 16,
      flexWrap: 'wrap',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--hub-cream)'
    }
  }, league || 'Kommende sendinger'), league && /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    tone: "dark",
    icon: "x",
    onClick: () => setLeague(null)
  }, "Vis alle")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--hub-ink-3)'
    }
  }, list.map(m => /*#__PURE__*/React.createElement(MatchRow, {
    compact: true,
    key: m.id,
    m: m,
    onPick: pickMatch
  }))))));
}
window.Sport = Sport;
})(); } catch (e) { __ds_ns.__errors.push({ path: "publish/js/Sport.babel.js", error: String((e && e.message) || e) }); }

// publish/js/data.js
try { (() => {
window.HUB_DATA = {
  matches: [{
    id: 'm1',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Arsenal',
    away: 'Tottenham',
    day: 'Lør 18. okt',
    time: '18:30',
    big: true
  }, {
    id: 'm2',
    sport: 'Fotball',
    league: 'Eliteserien',
    home: 'Rosenborg',
    away: 'Molde',
    day: 'Søn 19. okt',
    time: '17:00'
  }, {
    id: 'm6',
    sport: 'Fotball',
    league: 'LaLiga',
    home: 'Barcelona',
    away: 'Atlético Madrid',
    day: 'Lør 18. okt',
    time: '21:00'
  }, {
    id: 'm7',
    sport: 'Fotball',
    league: 'Bundesliga',
    home: 'Dortmund',
    away: 'Bayern München',
    day: 'Lør 18. okt',
    time: '18:30',
    big: true
  }, {
    id: 'm8',
    sport: 'Fotball',
    league: 'Serie A',
    home: 'Inter',
    away: 'Juventus',
    day: 'Søn 19. okt',
    time: '20:45'
  }, {
    id: 'm9',
    sport: 'Fotball',
    league: 'Ligue 1',
    home: 'PSG',
    away: 'Marseille',
    day: 'Søn 19. okt',
    time: '20:45'
  }, {
    id: 'm10',
    sport: 'USA-sport',
    league: 'NFL',
    home: 'Kansas City Chiefs',
    away: 'Buffalo Bills',
    day: 'Søn 19. okt',
    time: '22:25'
  }, {
    id: 'm11',
    sport: 'USA-sport',
    league: 'NHL',
    home: 'Toronto Maple Leafs',
    away: 'Boston Bruins',
    day: 'Tir 21. okt',
    time: '01:00'
  }, {
    id: 'm12',
    sport: 'USA-sport',
    league: 'NBA',
    home: 'Los Angeles Lakers',
    away: 'Golden State Warriors',
    day: 'Ons 22. okt',
    time: '04:00'
  }, {
    id: 'm3',
    sport: 'Motorsport',
    league: 'Formel 1',
    home: 'USAs Grand Prix',
    away: null,
    day: 'Søn 19. okt',
    time: '21:00'
  }, {
    id: 'm4',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Real Madrid',
    away: 'Liverpool',
    day: 'Tir 21. okt',
    time: '21:00',
    big: true
  }, {
    id: 'm5',
    sport: 'Håndball',
    league: 'EHF EURO 2026',
    home: 'Norge',
    away: 'Danmark',
    day: 'Ons 22. okt',
    time: '18:15'
  }, {
    id: 'm13',
    sport: 'Tennis',
    league: 'ATP Basel',
    home: 'Casper Ruud',
    away: 'Holger Rune',
    day: 'Tor 23. okt',
    time: '19:00'
  }, {
    id: 'm14',
    sport: 'Darts',
    league: 'PDC European Championship',
    home: 'Finalekveld',
    away: null,
    day: 'Søn 26. okt',
    time: '20:00'
  }, {
    id: 'm15',
    sport: 'E-sport',
    league: 'LoL Worlds',
    home: 'Kvartfinale',
    away: null,
    day: 'Fre 24. okt',
    time: '11:00'
  }, {
    id: 'm16',
    sport: 'Kampsport',
    league: 'UFC',
    home: 'Hovedkort',
    away: null,
    day: 'Søn 26. okt',
    time: '04:00',
    big: true
  }, {
    id: 'm17',
    sport: 'Motorsport',
    league: 'MotoGP',
    home: 'Malaysias Grand Prix',
    away: null,
    day: 'Søn 26. okt',
    time: '08:00'
  }, {
    id: 'm18',
    sport: 'Vintersport',
    league: 'Alpint verdenscup',
    home: 'Sölden, storslalåm menn',
    away: null,
    day: 'Søn 26. okt',
    time: '10:00',
    big: true
  }, {
    id: 'm19',
    sport: 'Vintersport',
    league: 'Alpint verdenscup',
    home: 'Sölden, storslalåm kvinner',
    away: null,
    day: 'Lør 25. okt',
    time: '10:00'
  }, {
    id: 'x1',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Nottingham Forest',
    away: 'Chelsea',
    day: 'Lør 18. okt',
    time: '13:30'
  }, {
    id: 'x2',
    sport: 'Fotball',
    league: 'LaLiga',
    home: 'Sevilla',
    away: 'Mallorca',
    day: 'Lør 18. okt',
    time: '14:00'
  }, {
    id: 'x3',
    sport: 'Fotball',
    league: 'Serie A',
    home: 'Napoli',
    away: 'Torino',
    day: 'Lør 18. okt',
    time: '15:00'
  }, {
    id: 'x4',
    sport: 'Fotball',
    league: 'Bundesliga',
    home: 'Leverkusen',
    away: 'Freiburg',
    day: 'Lør 18. okt',
    time: '15:30'
  }, {
    id: 'x5',
    sport: 'Fotball',
    league: 'Bundesliga',
    home: 'Stuttgart',
    away: 'Wolfsburg',
    day: 'Lør 18. okt',
    time: '15:30'
  }, {
    id: 'x6',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Brighton',
    away: 'Newcastle',
    day: 'Lør 18. okt',
    time: '16:00'
  }, {
    id: 'x7',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Burnley',
    away: 'Leeds',
    day: 'Lør 18. okt',
    time: '16:00'
  }, {
    id: 'x8',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Crystal Palace',
    away: 'Bournemouth',
    day: 'Lør 18. okt',
    time: '16:00'
  }, {
    id: 'x9',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Manchester City',
    away: 'Everton',
    day: 'Lør 18. okt',
    time: '16:00'
  }, {
    id: 'x10',
    sport: 'Fotball',
    league: 'LaLiga',
    home: 'Real Madrid',
    away: 'Getafe',
    day: 'Lør 18. okt',
    time: '16:15'
  }, {
    id: 'x11',
    sport: 'Fotball',
    league: 'Ligue 1',
    home: 'Lyon',
    away: 'Lille',
    day: 'Lør 18. okt',
    time: '17:00'
  }, {
    id: 'x12',
    sport: 'Fotball',
    league: 'Serie A',
    home: 'Roma',
    away: 'Atalanta',
    day: 'Lør 18. okt',
    time: '18:00'
  }, {
    id: 'x13',
    sport: 'Fotball',
    league: 'Serie A',
    home: 'Lazio',
    away: 'Fiorentina',
    day: 'Søn 19. okt',
    time: '12:30'
  }, {
    id: 'x14',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Liverpool',
    away: 'Manchester United',
    day: 'Søn 19. okt',
    time: '15:00',
    big: true
  }, {
    id: 'x15',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Aston Villa',
    away: 'West Ham',
    day: 'Søn 19. okt',
    time: '15:00'
  }, {
    id: 'x16',
    sport: 'Fotball',
    league: 'Eliteserien',
    home: 'Bodø/Glimt',
    away: 'Brann',
    day: 'Søn 19. okt',
    time: '17:00'
  }, {
    id: 'x17',
    sport: 'Fotball',
    league: 'Eliteserien',
    home: 'Viking',
    away: 'Lillestrøm',
    day: 'Søn 19. okt',
    time: '17:00'
  }, {
    id: 'x18',
    sport: 'Fotball',
    league: 'Bundesliga',
    home: 'Frankfurt',
    away: 'RB Leipzig',
    day: 'Søn 19. okt',
    time: '17:30'
  }, {
    id: 'x19',
    sport: 'Fotball',
    league: 'Eliteserien',
    home: 'Vålerenga',
    away: 'Tromsø',
    day: 'Søn 19. okt',
    time: '19:15'
  }, {
    id: 'x20',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'West Ham',
    away: 'Brentford',
    day: 'Man 20. okt',
    time: '21:00'
  }, {
    id: 'x21',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Barcelona',
    away: 'Olympiacos',
    day: 'Tir 21. okt',
    time: '18:45'
  }, {
    id: 'x22',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Kairat',
    away: 'Pafos',
    day: 'Tir 21. okt',
    time: '18:45'
  }, {
    id: 'x23',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Arsenal',
    away: 'Atlético Madrid',
    day: 'Tir 21. okt',
    time: '21:00',
    big: true
  }, {
    id: 'x24',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Leverkusen',
    away: 'PSG',
    day: 'Tir 21. okt',
    time: '21:00'
  }, {
    id: 'x25',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Newcastle',
    away: 'Benfica',
    day: 'Tir 21. okt',
    time: '21:00'
  }, {
    id: 'x26',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Villarreal',
    away: 'Manchester City',
    day: 'Tir 21. okt',
    time: '21:00'
  }, {
    id: 'x27',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'København',
    away: 'Dortmund',
    day: 'Tir 21. okt',
    time: '21:00'
  }, {
    id: 'x28',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Athletic Club',
    away: 'Qarabağ',
    day: 'Ons 22. okt',
    time: '18:45'
  }, {
    id: 'x29',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Galatasaray',
    away: 'Bodø/Glimt',
    day: 'Ons 22. okt',
    time: '18:45',
    big: true
  }, {
    id: 'x30',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Bayern München',
    away: 'Club Brugge',
    day: 'Ons 22. okt',
    time: '21:00'
  }, {
    id: 'x31',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Chelsea',
    away: 'Ajax',
    day: 'Ons 22. okt',
    time: '21:00'
  }, {
    id: 'x32',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Inter',
    away: 'Union SG',
    day: 'Ons 22. okt',
    time: '21:00'
  }, {
    id: 'x33',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Juventus',
    away: 'Monaco',
    day: 'Ons 22. okt',
    time: '21:00'
  }, {
    id: 'x34',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Marseille',
    away: 'Sporting',
    day: 'Ons 22. okt',
    time: '21:00'
  }, {
    id: 'x35',
    sport: 'Fotball',
    league: 'Europa League',
    home: 'Lyon',
    away: 'Basel',
    day: 'Tor 23. okt',
    time: '18:45'
  }, {
    id: 'x36',
    sport: 'Fotball',
    league: 'Europa League',
    home: 'Brann',
    away: 'Rangers',
    day: 'Tor 23. okt',
    time: '21:00',
    big: true
  }, {
    id: 'x37',
    sport: 'Fotball',
    league: 'Europa League',
    home: 'Aston Villa',
    away: 'Feyenoord',
    day: 'Tor 23. okt',
    time: '21:00'
  }, {
    id: 'x38',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Leeds',
    away: 'West Ham',
    day: 'Lør 25. okt',
    time: '13:30'
  }, {
    id: 'x39',
    sport: 'Fotball',
    league: 'Bundesliga',
    home: 'Bayern München',
    away: 'Mönchengladbach',
    day: 'Lør 25. okt',
    time: '15:30'
  }, {
    id: 'x40',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Chelsea',
    away: 'Sunderland',
    day: 'Lør 25. okt',
    time: '16:00'
  }, {
    id: 'x41',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Newcastle',
    away: 'Fulham',
    day: 'Lør 25. okt',
    time: '16:00'
  }, {
    id: 'x42',
    sport: 'Fotball',
    league: 'Serie A',
    home: 'Inter',
    away: 'Napoli',
    day: 'Lør 25. okt',
    time: '18:00',
    big: true
  }, {
    id: 'x43',
    sport: 'Fotball',
    league: 'Bundesliga',
    home: 'Dortmund',
    away: 'Köln',
    day: 'Lør 25. okt',
    time: '18:30'
  }, {
    id: 'x44',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Manchester United',
    away: 'Brighton',
    day: 'Lør 25. okt',
    time: '18:30'
  }, {
    id: 'x45',
    sport: 'Fotball',
    league: 'Serie A',
    home: 'AC Milan',
    away: 'Pisa',
    day: 'Lør 25. okt',
    time: '20:45'
  }, {
    id: 'x46',
    sport: 'Fotball',
    league: 'Ligue 1',
    home: 'PSG',
    away: 'Nantes',
    day: 'Lør 25. okt',
    time: '21:05'
  }, {
    id: 'x47',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Arsenal',
    away: 'Crystal Palace',
    day: 'Søn 26. okt',
    time: '15:00'
  }, {
    id: 'x48',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Aston Villa',
    away: 'Manchester City',
    day: 'Søn 26. okt',
    time: '15:00'
  }, {
    id: 'x49',
    sport: 'Fotball',
    league: 'LaLiga',
    home: 'Real Madrid',
    away: 'Barcelona',
    day: 'Søn 26. okt',
    time: '16:15',
    big: true
  }, {
    id: 'x50',
    sport: 'Fotball',
    league: 'Eliteserien',
    home: 'Rosenborg',
    away: 'Bodø/Glimt',
    day: 'Søn 26. okt',
    time: '17:00'
  }, {
    id: 'x51',
    sport: 'Fotball',
    league: 'Eliteserien',
    home: 'Brann',
    away: 'Molde',
    day: 'Søn 26. okt',
    time: '17:00'
  }, {
    id: 'x52',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Brentford',
    away: 'Liverpool',
    day: 'Søn 26. okt',
    time: '17:30'
  }, {
    id: 'x53',
    sport: 'USA-sport',
    league: 'NFL',
    home: 'New York Jets',
    away: 'Cincinnati Bengals',
    day: 'Søn 26. okt',
    time: '19:00'
  }, {
    id: 'x54',
    sport: 'Fotball',
    league: 'Serie A',
    home: 'Juventus',
    away: 'Lazio',
    day: 'Søn 26. okt',
    time: '20:45'
  }, {
    id: 'x55',
    sport: 'Motorsport',
    league: 'Formel 1',
    home: 'Mexicos Grand Prix',
    away: null,
    day: 'Søn 26. okt',
    time: '21:00'
  }],
  rooms: [{
    id: 'r1',
    number: 1,
    name: 'Highfield Road',
    club: 'Coventry',
    closed: 2005,
    image: 'assets/images/room-highfield-road.avif',
    capacity: 'Opptil 6',
    perHour: 890
  }, {
    id: 'r2',
    number: 2,
    name: 'Filbert Street',
    club: 'Leicester',
    closed: 2002,
    image: 'assets/images/room-filbert-street.avif',
    capacity: 'Opptil 6',
    perHour: 890
  }, {
    id: 'r3',
    number: 3,
    name: 'Roker Park',
    club: 'Sunderland',
    closed: 1997,
    image: 'assets/images/room-roker-park.avif',
    capacity: 'Opptil 16',
    perHour: 2190,
    soldOut: ['m1']
  }, {
    id: 'r4',
    number: 4,
    name: 'Maine Road',
    club: 'Manchester City',
    closed: 2003,
    image: 'assets/images/room-maine-road.avif',
    capacity: 'Opptil 8',
    perHour: 1190
  }, {
    id: 'r5',
    number: 5,
    name: 'Highbury',
    club: 'Arsenal',
    closed: 2006,
    image: 'assets/images/room-highbury.avif',
    capacity: 'Opptil 8',
    perHour: 1190,
    soldOut: ['m1']
  }, {
    id: 'r6',
    number: 6,
    name: 'Upton Park',
    club: 'West Ham',
    closed: 2016,
    image: 'assets/images/room-upton-park.avif',
    capacity: 'Opptil 6',
    perHour: 890
  }, {
    id: 'g1',
    number: 7,
    type: 'gaming',
    name: 'Tomb Raider',
    club: 'Core Design, 1996',
    image: 'assets/images/room-tomb-raider.avif',
    capacity: 'Opptil 4',
    perHour: 590
  }, {
    id: 'g2',
    number: 8,
    type: 'gaming',
    name: 'Crash Bandicoot',
    club: 'Naughty Dog, 1996',
    image: 'assets/images/room-crash-bandicoot.avif',
    capacity: 'Opptil 4',
    perHour: 590
  }, {
    id: 'g3',
    number: 9,
    type: 'gaming',
    name: 'Street Fighter II',
    club: 'Capcom, 1991',
    image: 'assets/images/room-street-fighter-ii.avif',
    capacity: 'Opptil 6',
    perHour: 690,
    soldOut: ['m1']
  }, {
    id: 'g4',
    number: 10,
    type: 'gaming',
    name: 'Doom',
    club: 'id Software, 1993',
    image: 'assets/images/room-doom.avif',
    capacity: 'Opptil 6',
    perHour: 690
  }, {
    id: 's1',
    number: 11,
    type: 'sim',
    name: 'Silverstone',
    image: 'assets/images/room-silverstone.avif',
    rigs: 6,
    capacity: '6 rigger',
    perHour: 249,
    wholeRoom: 1290
  }, {
    id: 's2',
    number: 12,
    type: 'sim',
    name: 'Monza',
    image: 'assets/images/room-monza.avif',
    rigs: 6,
    capacity: '6 rigger',
    perHour: 249,
    wholeRoom: 1290
  }],
  lapTimes: [{
    name: 'Martin H.',
    track: 'Spa',
    time: '2:18.402'
  }, {
    name: 'Ida S.',
    track: 'Spa',
    time: '2:18.977'
  }, {
    name: 'Jonas B.',
    track: 'Spa',
    time: '2:19.310'
  }, {
    name: 'Emil K.',
    track: 'Spa',
    time: '2:20.045'
  }, {
    name: 'Sara L.',
    track: 'Spa',
    time: '2:20.512'
  }],
  food: [{
    id: 'f1',
    name: 'Klassiker',
    desc: 'Burgere, pommes og dip',
    price: 245
  }, {
    id: 'f2',
    name: 'Vegetar',
    desc: 'Halloumiburger, salat og pommes',
    price: 235
  }, {
    id: 'f3',
    name: 'Snacks',
    desc: 'Nachos, nøtter og popcorn',
    price: 145
  }],
  pizzas: [{
    id: 'p1',
    no: 1,
    name: 'El Clásico',
    desc: 'Margherita',
    price: 179
  }, {
    id: 'p2',
    no: 5,
    name: 'Hudson River Derby',
    desc: 'Pepperoni',
    price: 199
  }, {
    id: 'p3',
    no: 6,
    name: 'Kıtalararası Derbi',
    desc: 'Kebab',
    price: 219
  }, {
    id: 'p4',
    no: 7,
    name: 'Old Firm',
    desc: 'Pulled pork og whisky-BBQ',
    price: 229
  }, {
    id: 'p5',
    no: 3,
    name: 'Derby della Lanterna',
    desc: 'Pesto og grønnsaker (vegetar)',
    price: 209
  }]
};
window.kr = n => 'kr ' + n.toLocaleString('nb-NO').replace(/,/g, ' ');
})(); } catch (e) { __ds_ns.__errors.push({ path: "publish/js/data.js", error: String((e && e.message) || e) }); }

// ui_kits/booking/Booking.jsx
try { (() => {
const HUB_DUR = {
  Fotball: 120,
  'Håndball': 105,
  Motorsport: 120,
  Vintersport: 150,
  Tennis: 150,
  Darts: 240,
  Kampsport: 240,
  'E-sport': 180,
  'USA-sport': 195
};
const hubClock = mins => {
  const m = (mins % 1440 + 1440) % 1440;
  return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
};
const hubDur = m => {
  const h = Math.floor(m / 60),
    r = m % 60;
  return (h ? h + ' t' : '') + (r ? ' ' + r + ' min' : '');
};
const HUB_FOOD_CATS = ['Mat', 'Drikke', 'Snacks'];
function hubFoodGroups() {
  const M = window.HUB_MENU,
    D = window.HUB_DATA;
  const unit = {
    Pizza: 'per pizza'
  };
  const out = [];
  HUB_FOOD_CATS.forEach(c => M[c].cols.flat().forEach(t => {
    const g = M[c].groups.find(x => x.title === t);
    if (g) out.push({
      cat: c,
      title: t,
      items: g.items
    });
  }));
  return out.map(x => ({
    cat: x.cat,
    title: x.title,
    items: x.items.map(([name, desc, price]) => ({
      id: x.title + ':' + name,
      name,
      desc,
      price,
      unit: unit[x.title]
    }))
  }));
}
function FoodPicker({
  food,
  setFood
}) {
  const {
    Stepper,
    Icon,
    Tabs
  } = window.HUBDesignSystem_d87c4c;
  const groups = React.useMemo(hubFoodGroups, []);
  const [cat, setCat] = React.useState('Mat');
  const [open, setOpen] = React.useState('Pizza');
  const cnt = c => groups.filter(g => g.cat === c).reduce((s, g) => s + g.items.reduce((t, f) => t + (food[f.id] || 0), 0), 0);
  const pick = c => {
    setCat(c);
    setOpen(groups.find(g => g.cat === c).title);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tabs, {
    tone: "dark",
    items: HUB_FOOD_CATS.map(c => ({
      value: c,
      label: cnt(c) ? `${c} · ${cnt(c)}` : c
    })),
    value: cat,
    onChange: pick,
    style: {
      marginBottom: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--hub-ink-3)'
    }
  }, groups.filter(g => g.cat === cat).map((g, gi) => {
    const on = open === g.title;
    const n = g.items.reduce((s, f) => s + (food[f.id] || 0), 0);
    const sum = g.items.reduce((s, f) => s + f.price * (food[f.id] || 0), 0);
    return /*#__PURE__*/React.createElement("div", {
      key: g.title,
      style: {
        borderTop: gi ? '1px solid var(--hub-ink-3)' : 0
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(on ? null : g.title),
      "aria-expanded": on,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 0',
        minHeight: 44,
        background: 'transparent',
        border: 0,
        color: 'var(--hub-cream)',
        fontFamily: 'var(--font-body)',
        cursor: 'pointer',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16
      }
    }, g.title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--hub-grey-400)',
        flex: 1
      }
    }, g.items.length, " valg"), n > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: 'var(--hub-pink-light)',
        whiteSpace: 'nowrap'
      }
    }, n, " valgt \xB7 ", kr(sum)), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        transform: on ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--duration-fast)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 18
    }))), on && /*#__PURE__*/React.createElement("div", {
      className: "hub-food",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,280px),1fr))',
        columnGap: 24,
        paddingBottom: 8
      }
    }, g.items.map(f => {
      const no = (window.HUB_MENU_NO || {})[f.name];
      return /*#__PURE__*/React.createElement("div", {
        key: f.id,
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '6px 0',
          borderTop: '1px solid var(--hub-ink-3)'
        }
      }, no && /*#__PURE__*/React.createElement("div", {
        style: {
          width: 22,
          flex: 'none',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 14,
          color: 'var(--hub-pink-light)',
          fontVariantNumeric: 'tabular-nums'
        }
      }, no), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 5,
          fontWeight: 700,
          fontSize: 14,
          color: 'var(--hub-cream)'
        }
      }, f.name, ((window.HUB_MENU_TAGS || {})[f.name] || []).map(k => /*#__PURE__*/React.createElement("span", {
        key: k,
        title: window.HUB_TAG_ICON[k][1],
        style: {
          display: 'inline-flex'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: window.HUB_TAG_ICON[k][0],
        size: 14,
        color: k === 'hot' ? '#e8735c' : '#7cc48a'
      })))), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          color: 'var(--hub-grey-400)'
        }
      }, f.desc, " \xB7 ", kr(f.price), f.unit ? ' ' + f.unit : '')), /*#__PURE__*/React.createElement(Stepper, {
        size: "sm",
        tone: "dark",
        value: food[f.id] || 0,
        min: 0,
        max: 14,
        onChange: v => setFood({
          ...food,
          [f.id]: v
        })
      }));
    })));
  })));
}
function SportStep({
  n,
  title,
  children,
  aside
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--hub-ink-3)',
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginBottom: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 18,
      color: 'var(--hub-pink-light)'
    }
  }, n), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: '-0.015em',
      color: 'var(--hub-cream)'
    }
  }, title), aside && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-400)'
    }
  }, aside)), children);
}
function SportBooking({
  onDone,
  initialMatch,
  title = 'Se kampen i eget rom',
  lead = 'Storskjerm, surroundlyd og mat servert på rommet. Plass til 3 til 12 personer.',
  bg = 'var(--hub-ink)',
  id
}) {
  const {
    Eyebrow,
    Stepper,
    Button,
    Badge,
    Checkbox,
    Tag,
    IconButton,
    Select,
    Icon,
    Input
  } = window.HUBDesignSystem_d87c4c;
  const dateRef = React.useRef(null);
  const D = window.HUB_DATA;
  const matches = D.matches.slice().sort((a, b) => parseInt(a.day.match(/\d+/)) - parseInt(b.day.match(/\d+/)) || a.time.localeCompare(b.time));
  const days = [...new Set(matches.map(m => m.day))];
  const rooms = D.rooms.filter(r => !r.type);
  const first = matches.find(m => m.id === initialMatch) || matches[0];
  const [day, setDay] = React.useState(first.day);
  const [mid, setMid] = React.useState(first.id);
  const [sel, setSel] = React.useState(null);
  const [before, setBefore] = React.useState(30);
  const [after, setAfter] = React.useState(0);
  const [food, setFood] = React.useState({});
  const [split, setSplit] = React.useState(4);
  const [tour, setTour] = React.useState('Alle');
  const [cTime, setCTime] = React.useState('18:00');
  const [cHours, setCHours] = React.useState(2);
  const allFood = React.useMemo(() => hubFoodGroups().flatMap(g => g.items), []);
  const [mode, setMode] = React.useState('send');
  const [fq, setFq] = React.useState('');
  const [fid, setFid] = React.useState(null);
  const film = mode === 'film';
  const custom = film || mid === 'custom';
  const match = custom ? {
    id: 'custom',
    day,
    time: cTime,
    home: film ? (D.films.find(f => f.id === fid) || {
      title: 'Film'
    }).title : 'Egen tid',
    away: null,
    dur: cHours * 60
  } : matches.find(m => m.id === mid);
  const sold = r => (r.soldOut || []).includes(mid);
  const room = rooms.find(r => r.id === sel && !sold(r));
  const dur = match.dur || HUB_DUR[match.sport] || 120;
  const [hh, mm] = match.time.split(':').map(Number);
  const bf = custom ? 0 : before,
    af = custom ? 0 : after;
  const start = hh * 60 + mm - bf,
    end = hh * 60 + mm + dur + af;
  const hours = Math.ceil((end - start) / 30) / 2;
  const foodN = allFood.reduce((s, f) => s + (food[f.id] || 0), 0);
  const foodSum = allFood.reduce((s, f) => s + f.price * (food[f.id] || 0), 0);
  const roomSum = room ? Math.round(room.perHour * hours) : 0;
  const total = roomSum + foodSum;
  const pickDay = d => {
    setDay(d);
    setTour('Alle');
    if (!custom) setMid(matches.find(m => m.day === d).id);
  };
  const times = Array.from({
    length: 27
  }, (_, i) => hubClock(600 + i * 30));
  const dayList = matches.filter(m => m.day === day);
  const dayTours = [...new Set(dayList.map(m => m.league))];
  const shown = dayList.filter(m => tour === 'Alle' || m.league === tour);
  const ttl = m => m.away ? `${m.home} – ${m.away}` : m.home;
  const Line = ({
    a,
    b,
    strong
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      padding: '6px 0',
      fontSize: strong ? 18 : 14,
      fontWeight: strong ? 700 : 400
    }
  }, /*#__PURE__*/React.createElement("span", null, a), /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, b));
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '40px var(--page-margin) 56px'
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 12px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(30px,4vw,44px)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--hub-cream)'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 20px',
      fontSize: 16,
      lineHeight: 1.5,
      color: 'var(--hub-grey-300)',
      maxWidth: 640
    }
  }, lead), /*#__PURE__*/React.createElement("div", {
    className: "hub-split",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 340px',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-steps",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(SportStep, {
    n: "1",
    title: "Hva skal dere se?",
    aside: `${hubClock(start)}–${hubClock(end)} · ${String(hours).replace('.', ',')} t`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))',
      gap: 10,
      marginBottom: 14
    }
  }, [['send', 'Sending', 'Sport, show og live-events', 'device-tv'], ['film', 'Film', 'Strøm fra egne kontoer', 'movie']].map(([k, t, ds, ic]) => {
    const on = mode === k;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => setMode(k),
      "aria-pressed": on,
      style: {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 14px',
        minHeight: 44,
        textAlign: 'left',
        fontFamily: 'var(--font-body)',
        background: on ? 'var(--hub-ink-2)' : 'transparent',
        border: `2px solid ${on ? 'var(--hub-pink)' : 'var(--hub-ink-3)'}`
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 22,
      color: "var(--hub-pink-light)"
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16,
        color: 'var(--hub-cream)'
      }
    }, t), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--hub-grey-400)'
      }
    }, ds)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-left",
    label: "Tidligere datoer",
    tone: "dark",
    size: 36,
    onClick: () => dateRef.current.scrollBy({
      left: -280,
      behavior: 'smooth'
    })
  }), /*#__PURE__*/React.createElement("div", {
    ref: dateRef,
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      scrollbarWidth: 'none',
      flex: 1,
      minWidth: 0
    }
  }, days.map(d => {
    const [wd, ...rest] = d.split(' ');
    const on = d === day;
    return /*#__PURE__*/React.createElement("button", {
      key: d,
      onClick: () => pickDay(d),
      style: {
        cursor: 'pointer',
        flex: 'none',
        width: 64,
        padding: '6px 0',
        border: `2px solid ${on ? 'var(--hub-pink)' : 'var(--hub-ink-line)'}`,
        background: on ? 'var(--hub-pink)' : 'transparent',
        color: on ? 'var(--hub-white)' : 'var(--hub-cream)',
        fontFamily: 'var(--font-body)',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        opacity: 0.85
      }
    }, wd), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16
      }
    }, rest.join(' ')));
  })), /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-right",
    label: "Senere datoer",
    tone: "dark",
    size: 36,
    onClick: () => dateRef.current.scrollBy({
      left: 280,
      behavior: 'smooth'
    })
  })), film && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--hub-grey-300)',
      margin: '18px 0 8px'
    }
  }, "Sjekk om filmen er tilgjengelig"), /*#__PURE__*/React.createElement(Input, {
    tone: "dark",
    icon: "search",
    placeholder: "S\xF8k etter film",
    value: fq,
    onChange: e => setFq(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    className: "hub-step-list",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      maxHeight: 260,
      overflowY: 'auto',
      marginTop: 8
    }
  }, D.films.filter(f => f.title.toLowerCase().includes(fq.trim().toLowerCase())).map(f => {
    const on = fid === f.id,
      ok = f.on.length > 0;
    return /*#__PURE__*/React.createElement("div", {
      key: f.id,
      onClick: ok ? () => {
        setFid(on ? null : f.id);
        if (!on) setCHours(Math.ceil((f.min + 15) / 30) / 2);
      } : undefined,
      style: {
        cursor: ok ? 'pointer' : 'default',
        opacity: ok ? 1 : 0.6,
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) auto',
        gap: 12,
        alignItems: 'center',
        padding: '8px 12px',
        background: on ? 'var(--hub-ink-2)' : 'transparent',
        border: `2px solid ${on ? 'var(--hub-pink)' : 'var(--hub-ink-3)'}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 15,
        color: 'var(--hub-cream)'
      }
    }, f.title, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 400,
        fontSize: 13,
        color: 'var(--hub-grey-400)'
      }
    }, f.year, " \xB7 ", hubDur(f.min))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: ok ? 'var(--hub-grey-300)' : 'var(--hub-grey-400)',
        marginTop: 2
      }
    }, ok ? f.on.join(' · ') : 'Ikke tilgjengelig for strømming nå')), ok && /*#__PURE__*/React.createElement(Icon, {
      name: on ? 'check' : 'plus',
      size: 18,
      color: on ? 'var(--hub-pink)' : 'var(--hub-grey-400)'
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--hub-grey-400)',
      marginTop: 8
    }
  }, "Finner du ikke filmen? Dere kan logge inn p\xE5 egne kontoer eller koble til via HDMI.")), !film && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--hub-grey-300)',
      margin: '18px 0 8px'
    }
  }, `${dayList.length} sendinger ${day.toLowerCase()}`), dayTours.length > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 10
    }
  }, ['Alle', ...dayTours].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    tone: "dark",
    selected: tour === t,
    onClick: () => setTour(t)
  }, t, t !== 'Alle' && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6,
      opacity: 0.6
    }
  }, dayList.filter(m => m.league === t).length)))), /*#__PURE__*/React.createElement("div", {
    className: "hub-step-list",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      maxHeight: 360,
      overflowY: 'auto'
    }
  }, shown.map(m => {
    const on = m.id === mid;
    return /*#__PURE__*/React.createElement("div", {
      key: m.id,
      onClick: () => setMid(m.id),
      style: {
        cursor: 'pointer',
        display: 'grid',
        gridTemplateColumns: '40px minmax(0,1fr) auto',
        gap: 12,
        alignItems: 'center',
        padding: '6px 12px',
        background: on ? 'var(--hub-ink-2)' : 'transparent',
        border: `2px solid ${on ? 'var(--hub-pink)' : 'var(--hub-ink-3)'}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        transform: 'scale(0.72)',
        transformOrigin: 'left center',
        width: 40
      }
    }, /*#__PURE__*/React.createElement(LeagueLogo, {
      league: m.league
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--hub-grey-400)'
      }
    }, m.league), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16,
        color: 'var(--hub-cream)'
      }
    }, ttl(m))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: 'var(--hub-cream)'
      }
    }, m.time), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--hub-grey-400)'
      }
    }, "ca. ", hubDur(m.dur || HUB_DUR[m.sport] || 120))));
  })), /*#__PURE__*/React.createElement("div", {
    onClick: () => setMid('custom'),
    role: "button",
    style: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 8,
      padding: '10px 12px',
      minHeight: 44,
      border: `2px ${custom ? 'solid var(--hub-pink)' : 'dashed var(--hub-ink-line)'}`,
      background: custom ? 'var(--hub-ink-2)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 20,
    color: "var(--hub-pink-light)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--hub-cream)'
    }
  }, "Book uten sending"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--hub-grey-400)'
    }
  }, "Velg starttid og varighet selv")))), custom ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--hub-grey-300)',
      margin: '18px 0 8px'
    }
  }, "Tid"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    tone: "dark",
    label: "Starttid",
    options: times,
    value: cTime,
    onChange: e => setCTime(e.target.value),
    style: {
      width: 160
    }
  }), /*#__PURE__*/React.createElement(Stepper, {
    size: "sm",
    tone: "dark",
    label: "Varighet",
    unit: "t",
    value: cHours,
    min: 1,
    max: 8,
    onChange: setCHours
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--hub-grey-300)',
      margin: '18px 0 8px'
    }
  }, "Ekstra tid"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 4,
      marginBottom: 12,
      height: 28,
      fontSize: 12,
      fontWeight: 600
    }
  }, before > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: before,
      background: 'var(--hub-ink-3)',
      color: 'var(--hub-grey-300)',
      display: 'grid',
      placeItems: 'center',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  }, "F\xF8r"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: dur,
      background: 'var(--hub-pink)',
      color: 'var(--hub-white)',
      display: 'grid',
      placeItems: 'center',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  }, match.time), after > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: after,
      background: 'var(--hub-ink-3)',
      color: 'var(--hub-grey-300)',
      display: 'grid',
      placeItems: 'center',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  }, "Etter")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    size: "sm",
    tone: "dark",
    label: "Ekstra tid f\xF8r",
    unit: "min",
    value: before,
    min: 0,
    max: 120,
    onChange: v => setBefore(Math.max(0, Math.min(120, before + (v > before ? 30 : -30))))
  }), /*#__PURE__*/React.createElement(Stepper, {
    size: "sm",
    tone: "dark",
    label: "Ekstra tid etter",
    unit: "min",
    value: after,
    min: 0,
    max: 120,
    onChange: v => setAfter(Math.max(0, Math.min(120, after + (v > after ? 30 : -30))))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--hub-grey-400)',
      marginTop: 8
    }
  }, "Rommet er booket for hele sendingen. Legg til tid f\xF8r eller etter i halvtimer."))), /*#__PURE__*/React.createElement(SportStep, {
    n: "2",
    title: "Velg rom"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,150px),1fr))',
      gap: 10
    }
  }, rooms.map(r => {
    const so = sold(r);
    return /*#__PURE__*/React.createElement("div", {
      key: r.id,
      onClick: so ? undefined : () => setSel(r.id),
      style: {
        cursor: so ? 'default' : 'pointer',
        opacity: so ? 0.5 : 1,
        background: 'var(--hub-ink-3)',
        border: `3px solid ${room && room.id === r.id ? 'var(--hub-pink)' : 'transparent'}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 10px 10px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 15,
        color: 'var(--hub-cream)'
      }
    }, r.name), so && /*#__PURE__*/React.createElement(Badge, {
      color: "ink"
    }, "Utsolgt")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        columnGap: 8,
        fontSize: 13,
        color: 'var(--hub-grey-300)',
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        whiteSpace: 'nowrap'
      }
    }, r.capacity), /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--hub-cream)',
        whiteSpace: 'nowrap'
      }
    }, kr(r.perHour), " / t"))));
  }))), /*#__PURE__*/React.createElement(SportStep, {
    n: "3",
    title: "Mat og drikke",
    aside: "Valgfritt"
  }, /*#__PURE__*/React.createElement(FoodPicker, {
    food: food,
    setFood: setFood
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hub-aside",
    style: {
      position: 'sticky',
      top: 92,
      background: 'var(--hub-ink-2)',
      borderTop: '3px solid var(--hub-pink)',
      padding: 24,
      color: 'var(--hub-cream)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "Din booking"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      margin: '8px 0 2px'
    }
  }, ttl(match)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-300)',
      marginBottom: 12
    }
  }, match.day, " \xB7 ", hubClock(start), "\u2013", hubClock(end)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--hub-ink-3)',
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement(Line, {
    a: room ? `${room.name} · ${String(hours).replace('.', ',')} t` : 'Rom ikke valgt',
    b: room ? kr(roomSum) : '–'
  }), foodSum > 0 && /*#__PURE__*/React.createElement(Line, {
    a: `Mat · ${foodN} stk`,
    b: kr(foodSum)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--hub-ink-3)',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Line, {
    a: "Totalt",
    b: kr(total),
    strong: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--hub-ink-3)',
      padding: '12px 14px',
      marginTop: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    size: "sm",
    tone: "dark",
    label: "Del p\xE5",
    unit: "pers.",
    value: split,
    min: 1,
    max: 12,
    onChange: setSplit
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--hub-pink)'
    }
  }, kr(Math.ceil(total / split))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--hub-grey-400)'
    }
  }, "per person")))), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    disabled: !room,
    style: {
      marginTop: 18
    },
    onClick: () => onDone(match, room, {
      total,
      split
    })
  }, "Betal og book"), !room && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--hub-grey-400)',
      marginTop: 8,
      textAlign: 'center'
    }
  }, "Velg et rom for \xE5 fortsette")))));
}
function BookingPage({
  kind,
  matchId,
  onKind,
  onDone
}) {
  const {
    Eyebrow,
    Toast,
    Icon
  } = window.HUBDesignSystem_d87c4c;
  const R = window.HUB_DATA.rooms;
  const [done, setDone] = React.useState(null);
  const opts = [['sport', 'Storskjerm', 'Sport, show og film i eget rom, 3 til 12 personer.', 'device-tv'], ['gaming', 'Gaming', 'Gamingrom med konsoll og PC, eller simracing.', 'game-controller']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--hub-ink-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '40px var(--page-margin)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "Book"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '8px 0 20px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(32px,4vw,44px)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--hub-cream)'
    }
  }, "Hva vil dere booke?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))',
      gap: 16
    }
  }, opts.map(([k, t, d, ic]) => {
    const on = kind === k;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => onKind(k),
      "aria-pressed": on,
      style: {
        cursor: 'pointer',
        padding: '20px 20px 18px',
        border: `3px solid ${on ? 'var(--hub-pink)' : 'var(--hub-ink-3)'}`,
        background: on ? 'var(--hub-ink)' : 'transparent',
        textAlign: 'left',
        fontFamily: 'var(--font-body)',
        display: 'flex',
        alignItems: 'center',
        gap: 18,
        transition: 'border-color var(--duration-fast)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 48,
      color: on ? 'var(--hub-pink)' : 'var(--hub-pink-light)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 28,
        letterSpacing: '-0.02em',
        color: 'var(--hub-cream)'
      }
    }, t), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        color: 'var(--hub-grey-300)'
      }
    }, d)));
  })))), kind === 'sport' && /*#__PURE__*/React.createElement(SportBooking, {
    key: matchId || 'x',
    initialMatch: matchId,
    title: "Velg sending og rom",
    lead: null,
    onDone: onDone
  }), kind === 'gaming' && /*#__PURE__*/React.createElement(GamingBooking, {
    title: "Velg tid og rom",
    lead: null,
    onDone: setDone
  }), done && /*#__PURE__*/React.createElement(Toast, {
    kind: "success",
    title: `${done} er booket`,
    onClose: () => setDone(null),
    style: {
      position: 'fixed',
      right: 16,
      bottom: 16,
      zIndex: 30,
      maxWidth: 'calc(100vw - 32px)'
    }
  }, "Kvittering er sendt p\xE5 e-post."));
}
Object.assign(window, {
  SportBooking,
  BookingPage,
  FoodPicker,
  SportStep,
  hubClock,
  hubDur,
  HUB_DUR
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/Booking.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/Checkout.jsx
try { (() => {
function Checkout({
  match,
  room,
  hours,
  onBack,
  onDone
}) {
  const {
    Eyebrow,
    Card,
    Stepper,
    Checkbox,
    Radio,
    Input,
    Button,
    Switch
  } = window.HUBDesignSystem_d87c4c;
  const [food, setFood] = React.useState({
    f1: 4,
    f2: 2,
    f3: 0
  });
  const [pz, setPz] = React.useState({
    p1: 0,
    p2: 2,
    p3: 0,
    p4: 1,
    p5: 0
  });
  const [pay, setPay] = React.useState('split');
  const [split, setSplit] = React.useState(4);
  const [remind, setRemind] = React.useState(true);
  const F = window.HUB_DATA.food;
  const P = window.HUB_DATA.pizzas;
  const foodSum = F.reduce((s, f) => s + f.price * food[f.id], 0) + P.reduce((s, p) => s + p.price * pz[p.id], 0);
  const pzCount = P.reduce((s, p) => s + pz[p.id], 0);
  const roomSum = room.perHour * hours;
  const total = roomSum + foodSum;
  const H = ({
    children
  }) => /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 16px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: '-0.015em'
    }
  }, children);
  const Line = ({
    a,
    b,
    strong
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 0',
      fontSize: strong ? 18 : 15,
      fontWeight: strong ? 700 : 400
    }
  }, /*#__PURE__*/React.createElement("span", null, a), /*#__PURE__*/React.createElement("span", null, b));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--hub-cream)',
      minHeight: 'calc(100vh - 68px)',
      color: 'var(--hub-ink)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '40px var(--page-margin) 72px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "arrow-left",
    onClick: onBack,
    style: {
      marginLeft: -14
    }
  }, "Velg rom"), /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      margin: '20px 0 8px'
    }
  }, "Mat og drikke"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 32px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(32px,6vw,48px)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, "Maten kommer inn i pausen"), /*#__PURE__*/React.createElement("div", {
    className: "hub-split",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 360px',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(H, null, "Matpakker"), F.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '12px 0',
      borderTop: '1px solid var(--hub-cream-line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, f.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-700)'
    }
  }, f.desc, " \xB7 ", kr(f.price), " per person")), /*#__PURE__*/React.createElement(Stepper, {
    value: food[f.id],
    min: 0,
    max: 14,
    onChange: v => setFood({
      ...food,
      [f.id]: v
    })
  })))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      columnGap: 12
    }
  }, /*#__PURE__*/React.createElement(H, null, "Pizza"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-700)'
    }
  }, pzCount, " stk \xB7 \xE9n pizza holder til to")), P.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '12px 0',
      borderTop: '1px solid var(--hub-cream-line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      flex: 'none',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: 'var(--hub-pink-deep)'
    }
  }, p.no), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-700)'
    }
  }, p.desc, " \xB7 ", kr(p.price))), /*#__PURE__*/React.createElement(Stepper, {
    value: pz[p.id],
    min: 0,
    max: 10,
    onChange: v => setPz({
      ...pz,
      [p.id]: v
    })
  })))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(H, null, "Betaling"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      flexWrap: 'wrap',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "pay",
    value: "split",
    checked: pay === 'split',
    onChange: setPay,
    label: "Del regningen i appen"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "pay",
    value: "one",
    checked: pay === 'one',
    onChange: setPay,
    label: "\xC9n betaler alt"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hub-2col",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Navn",
    defaultValue: "Kristian"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-post",
    placeholder: "navn@epost.no",
    icon: "mail"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: remind,
    onChange: setRemind,
    label: "Send p\xE5minnelse til gjengen"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "hub-aside",
    style: {
      position: 'sticky',
      top: 92,
      background: 'var(--hub-ink)',
      color: 'var(--hub-cream)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "Din booking"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      margin: '8px 0 2px'
    }
  }, room.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-300)',
      marginBottom: 16
    }
  }, match.away ? `${match.home} – ${match.away}` : match.home, " \xB7 ", match.day, " ", match.time), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--hub-ink-3)'
    }
  }, /*#__PURE__*/React.createElement(Line, {
    a: `Romleie · ${hours} t`,
    b: kr(roomSum)
  }), /*#__PURE__*/React.createElement(Line, {
    a: "Mat",
    b: kr(foodSum)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--hub-ink-3)',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Line, {
    a: "Totalt",
    b: kr(total),
    strong: true
  }), pay === 'split' && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--hub-ink-3)',
      padding: '12px 14px',
      marginTop: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    size: "sm",
    tone: "dark",
    label: "Del p\xE5",
    unit: "pers.",
    value: split,
    min: 1,
    max: 12,
    onChange: setSplit
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--hub-pink)'
    }
  }, kr(Math.ceil(total / split))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--hub-grey-400)'
    }
  }, "per person")))), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    style: {
      marginTop: 20
    },
    onClick: () => onDone({
      total,
      split
    })
  }, "Betal og book"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--hub-grey-400)',
      marginTop: 10,
      textAlign: 'center'
    }
  }, "Alt betales p\xE5 forh\xE5nd")))));
}
window.Checkout = Checkout;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/Checkout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/Confirmation.jsx
try { (() => {
function Confirmation({
  match,
  room,
  booking,
  onHome
}) {
  const {
    Eyebrow,
    LetterBox,
    Button,
    Toast
  } = window.HUBDesignSystem_d87c4c;
  const [toast, setToast] = React.useState(true);
  const steps = [['Kvittering', 'Sendt til e-posten din. Vis den i resepsjonen når dere kommer.'], ['Ankomst', 'Rommet er klart 15 minutter før kampstart, med drikke på bordet.'], ['Mat', 'Maten serveres i pausen. Mer kan bestilles fra skjermen i rommet.'], ['Endre', 'Gratis endring og avbestilling inntil 48 timer før.']];
  return /*#__PURE__*/React.createElement("section", {
    className: "hub-sec",
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '72px var(--page-margin) 96px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "Booket"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '8px 0 12px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(34px,7vw,56px)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--hub-cream)'
    }
  }, room.name, " er booket"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 48px',
      fontSize: 18,
      color: 'var(--hub-grey-300)'
    }
  }, match.away ? `${match.home} – ${match.away}` : match.home, " \xB7 ", match.day, " kl. ", match.time, " \xB7 ", kr(booking.total)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))',
      gap: 20
    }
  }, steps.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      borderTop: '4px solid var(--hub-pink)',
      paddingTop: 18,
      opacity: i === 0 ? 1 : 0.85
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 40,
      color: 'var(--hub-pink-light)',
      lineHeight: 1
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--hub-cream)',
      margin: '14px 0 6px'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--hub-grey-300)'
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    className: "hub-actions",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: "share-2"
  }, "Del med gjengen"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    tone: "dark",
    onClick: onHome
  }, "Tilbake til kamper")), toast && /*#__PURE__*/React.createElement(Toast, {
    kind: "success",
    title: "Betaling mottatt",
    onClose: () => setToast(false),
    style: {
      position: 'fixed',
      right: 16,
      bottom: 16,
      zIndex: 30,
      maxWidth: 'calc(100vw - 32px)'
    }
  }, "Kvittering er sendt p\xE5 e-post."));
}
window.Confirmation = Confirmation;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/Confirmation.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/Gaming.jsx
try { (() => {
const HUB_GAMES = [['Sport', [['EA Sports FC', 'PS5 · Xbox · PC'], ['NBA 2K', 'PS5 · Xbox'], ['Madden NFL', 'PS5 · Xbox'], ['NHL', 'PS5 · Xbox'], ['Rocket League', 'PS5 · Xbox · PC · Switch']]], ['Fest og sofa', [['Mario Kart 8 Deluxe', 'Switch'], ['Super Smash Bros. Ultimate', 'Switch'], ['Overcooked! 2', 'PS5 · Switch'], ['Mario Party Superstars', 'Switch'], ['It Takes Two', 'PS5 · Xbox']]], ['Skyting', [['Call of Duty', 'PS5 · Xbox · PC'], ['Fortnite', 'PS5 · Xbox · PC · Switch'], ['Counter-Strike 2', 'PC'], ['Valorant', 'PC'], ['Apex Legends', 'PS5 · PC']]], ['Slåssing', [['Street Fighter 6', 'PS5 · Xbox'], ['Tekken 8', 'PS5 · Xbox'], ['Mortal Kombat 1', 'PS5 · Xbox']]], ['Retro', [['Crash Bandicoot N. Sane Trilogy', 'PS5 · Switch'], ['Tomb Raider I–III Remastered', 'PS5 · Switch'], ['Doom + Doom II', 'PC · Xbox'], ['Street Fighter 30th Anniversary Collection', 'PS5']]], ['Simracing', [['EA Sports F1', 'Simrigg'], ['Assetto Corsa Competizione', 'Simrigg'], ['iRacing', 'Simrigg'], ['Gran Turismo 7', 'Simrigg · PS5']]]];
function GamingBooking({
  title = 'Book gaming',
  lead,
  bg = 'var(--hub-ink)',
  initialType = 'gaming',
  onDone
}) {
  const {
    Eyebrow,
    Select,
    Stepper,
    Button,
    Tag,
    Icon,
    IconButton
  } = window.HUBDesignSystem_d87c4c;
  const dateRef = React.useRef(null);
  const D = window.HUB_DATA;
  const days = [...new Set(D.matches.map(m => m.day))].sort((a, b) => parseInt(a.match(/\d+/)) - parseInt(b.match(/\d+/)));
  const [day, setDay] = React.useState(days[0]);
  const [time, setTime] = React.useState('18:00');
  const [hours, setHours] = React.useState(2);
  const [type, setType] = React.useState(initialType);
  const [sel, setSel] = React.useState(null);
  const [whole, setWhole] = React.useState(false);
  const [rigs, setRigs] = React.useState(2);
  const [food, setFood] = React.useState({});
  const [split, setSplit] = React.useState(4);
  const sim = type === 'sim';
  const rooms = D.rooms.filter(r => r.type === type);
  const room = rooms.find(r => r.id === sel);
  const allFood = React.useMemo(() => hubFoodGroups().flatMap(x => x.items), []);
  const foodN = allFood.reduce((s, f) => s + (food[f.id] || 0), 0);
  const foodSum = allFood.reduce((s, f) => s + f.price * (food[f.id] || 0), 0);
  const roomSum = room ? (sim ? whole ? room.wholeRoom : room.perHour * rigs : room.perHour) * hours : 0;
  const total = roomSum + foodSum;
  const [hh, mm] = time.split(':').map(Number);
  const end = hubClock(hh * 60 + mm + hours * 60);
  const times = Array.from({
    length: 27
  }, (_, i) => hubClock(600 + i * 30));
  const pickType = t => {
    setType(t);
    setSel(null);
  };
  const Line = ({
    a,
    b,
    strong
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      padding: '6px 0',
      fontSize: strong ? 18 : 14,
      fontWeight: strong ? 700 : 400
    }
  }, /*#__PURE__*/React.createElement("span", null, a), /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, b));
  const types = [['gaming', 'Gaming', 'Konsoll og PC på storskjerm', 'game-controller'], ['sim', 'Simracing', 'Rigger med ratt, pedaler og sete', 'gauge']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '40px var(--page-margin) 56px'
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 12px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(30px,4vw,44px)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--hub-cream)'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 20px',
      fontSize: 16,
      lineHeight: 1.5,
      color: 'var(--hub-grey-300)',
      maxWidth: 640
    }
  }, lead), /*#__PURE__*/React.createElement("div", {
    className: "hub-split",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 340px',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-steps",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(SportStep, {
    n: "1",
    title: "Velg dato og tid",
    aside: `${time}–${end} · ${hours} t`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-left",
    label: "Tidligere datoer",
    tone: "dark",
    size: 36,
    onClick: () => dateRef.current.scrollBy({
      left: -280,
      behavior: 'smooth'
    })
  }), /*#__PURE__*/React.createElement("div", {
    ref: dateRef,
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      scrollbarWidth: 'none',
      flex: 1,
      minWidth: 0
    }
  }, days.map(d => {
    const [wd, ...rest] = d.split(' ');
    const on = d === day;
    return /*#__PURE__*/React.createElement("button", {
      key: d,
      onClick: () => setDay(d),
      style: {
        cursor: 'pointer',
        flex: 'none',
        width: 64,
        padding: '6px 0',
        border: `2px solid ${on ? 'var(--hub-pink)' : 'var(--hub-ink-line)'}`,
        background: on ? 'var(--hub-pink)' : 'transparent',
        color: on ? 'var(--hub-white)' : 'var(--hub-cream)',
        fontFamily: 'var(--font-body)',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        opacity: 0.85
      }
    }, wd), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16
      }
    }, rest.join(' ')));
  })), /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-right",
    label: "Senere datoer",
    tone: "dark",
    size: 36,
    onClick: () => dateRef.current.scrollBy({
      left: 280,
      behavior: 'smooth'
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap',
      alignItems: 'flex-end',
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Select, {
    tone: "dark",
    label: "Starttid",
    options: times,
    value: time,
    onChange: e => setTime(e.target.value),
    style: {
      width: 160
    }
  }), /*#__PURE__*/React.createElement(Stepper, {
    size: "sm",
    tone: "dark",
    label: "Varighet",
    unit: "t",
    value: hours,
    min: 1,
    max: 8,
    onChange: setHours
  }))), /*#__PURE__*/React.createElement(SportStep, {
    n: "2",
    title: "Gaming eller simracing"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))',
      gap: 10
    }
  }, types.map(([k, t, d, ic]) => {
    const on = type === k;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => pickType(k),
      "aria-pressed": on,
      style: {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 14px',
        minHeight: 44,
        textAlign: 'left',
        fontFamily: 'var(--font-body)',
        background: on ? 'var(--hub-ink-2)' : 'transparent',
        border: `2px solid ${on ? 'var(--hub-pink)' : 'var(--hub-ink-3)'}`
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 22,
      color: "var(--hub-pink-light)"
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16,
        color: 'var(--hub-cream)'
      }
    }, t), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--hub-grey-400)'
      }
    }, d)));
  })), sim && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap',
      alignItems: 'center',
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "dark",
    selected: !whole,
    onClick: () => setWhole(false)
  }, "Enkeltrigger"), /*#__PURE__*/React.createElement(Tag, {
    tone: "dark",
    selected: whole,
    onClick: () => setWhole(true)
  }, "Hele rommet")), !whole && /*#__PURE__*/React.createElement(Stepper, {
    size: "sm",
    tone: "dark",
    label: "Antall rigger",
    value: rigs,
    min: 1,
    max: 6,
    onChange: setRigs
  }))), /*#__PURE__*/React.createElement(SportStep, {
    n: "3",
    title: "Velg rom"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,150px),1fr))',
      gap: 10
    }
  }, rooms.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    onClick: () => setSel(r.id),
    style: {
      cursor: 'pointer',
      background: 'var(--hub-ink-3)',
      border: `3px solid ${sel === r.id ? 'var(--hub-pink)' : 'transparent'}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 10px 10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--hub-cream)'
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      columnGap: 8,
      fontSize: 13,
      color: 'var(--hub-grey-300)',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, r.capacity), /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--hub-cream)',
      whiteSpace: 'nowrap'
    }
  }, kr(sim && whole ? r.wholeRoom : r.perHour), " / t"))))))), /*#__PURE__*/React.createElement(SportStep, {
    n: "4",
    title: "Mat og drikke",
    aside: "Valgfritt"
  }, /*#__PURE__*/React.createElement(FoodPicker, {
    food: food,
    setFood: setFood
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hub-aside",
    style: {
      position: 'sticky',
      top: 92,
      background: 'var(--hub-ink-2)',
      borderTop: '3px solid var(--hub-pink)',
      padding: 24,
      color: 'var(--hub-cream)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "Din booking"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      margin: '8px 0 2px'
    }
  }, sim ? 'Simracing' : 'Gaming'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-300)',
      marginBottom: 12
    }
  }, day, " \xB7 ", time, "\u2013", end), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--hub-ink-3)',
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement(Line, {
    a: room ? `${room.name}${sim ? whole ? ' · hele rommet' : ` · ${rigs} rigger` : ''} · ${hours} t` : 'Rom ikke valgt',
    b: room ? kr(roomSum) : '–'
  }), foodSum > 0 && /*#__PURE__*/React.createElement(Line, {
    a: `Mat · ${foodN} stk`,
    b: kr(foodSum)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--hub-ink-3)',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Line, {
    a: "Totalt",
    b: kr(total),
    strong: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--hub-ink-3)',
      padding: '12px 14px',
      marginTop: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    size: "sm",
    tone: "dark",
    label: "Del p\xE5",
    unit: "pers.",
    value: split,
    min: 1,
    max: 12,
    onChange: setSplit
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--hub-pink)'
    }
  }, kr(Math.ceil(total / split))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--hub-grey-400)'
    }
  }, "per person")))), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    disabled: !room,
    style: {
      marginTop: 18
    },
    onClick: () => onDone(room.name)
  }, "Betal og book"), !room && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--hub-grey-400)',
      marginTop: 8,
      textAlign: 'center'
    }
  }, "Velg et rom for \xE5 fortsette")))));
}
function Gaming() {
  const {
    Tag,
    Toast,
    Eyebrow
  } = window.HUBDesignSystem_d87c4c;
  const R = window.HUB_DATA.rooms;
  const [cat, setCat] = React.useState('Alle');
  const [done, setDone] = React.useState(null);
  const games = HUB_GAMES.filter(([c]) => cat === 'Alle' || c === cat);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--hub-ink-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '40px var(--page-margin) 40px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "Gaming og simracing"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 8px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 36,
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--hub-cream)'
    }
  }, "Spill"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 20px',
      fontSize: 16,
      color: 'var(--hub-grey-300)'
    }
  }, "Et utvalg av det som er installert. Si fra om du savner noe."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 28
    }
  }, ['Alle', ...HUB_GAMES.map(([c]) => c)].map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    tone: "dark",
    selected: cat === c,
    onClick: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      columns: 'min(100%,300px) 3',
      columnGap: 40
    }
  }, games.map(([c, list]) => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      breakInside: 'avoid',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 6px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--hub-cream)',
      paddingBottom: 8,
      borderBottom: '3px solid var(--hub-pink)'
    }
  }, c), list.map(([gm, p]) => /*#__PURE__*/React.createElement("div", {
    key: gm,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      padding: '10px 0',
      borderBottom: '1px solid var(--hub-ink-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--hub-cream)',
      fontWeight: 600,
      fontSize: 15
    }
  }, gm), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--hub-grey-400)',
      whiteSpace: 'nowrap'
    }
  }, p)))))))), /*#__PURE__*/React.createElement(GamingBooking, {
    title: "Book gaming eller simracing",
    lead: "PS5, Xbox, Switch og gaming-PC i alle gamingrom. Seks simrigger side om side, book \xE9n rigg eller hele rommet.",
    bg: "var(--hub-ink)",
    onDone: setDone
  }), done && /*#__PURE__*/React.createElement(Toast, {
    kind: "success",
    title: `${done} er booket`,
    onClose: () => setDone(null),
    style: {
      position: 'fixed',
      right: 16,
      bottom: 16,
      zIndex: 30,
      maxWidth: 'calc(100vw - 32px)'
    }
  }, "Kvittering er sendt p\xE5 e-post."));
}
Object.assign(window, {
  Gaming,
  GamingBooking
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/Gaming.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/Header.jsx
try { (() => {
function Header({
  view,
  onNav,
  onLogin
}) {
  const {
    Button
  } = window.HUBDesignSystem_d87c4c;
  const links = [['Storskjerm', 'sport'], ['Gaming', 'gaming'], ['Mat', 'menu'], ['Rom', 'roomsInfo'], ['Selskap og bedrift', 'selskap']];
  const cur = view === 'bedrift' ? 'selskap' : view;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'var(--hub-ink)',
      borderBottom: '1px solid var(--hub-ink-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-hdr",
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 var(--page-margin)',
      height: 68,
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/hub-logo-pink.svg",
    alt: "HUB",
    onClick: () => onNav('home'),
    style: {
      height: 30,
      cursor: 'pointer'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    className: "hub-nav",
    style: {
      display: 'flex',
      gap: 24,
      flex: 1,
      fontSize: 15,
      fontWeight: 500,
      overflowX: 'auto'
    }
  }, links.map(([l, v]) => /*#__PURE__*/React.createElement("a", {
    key: v,
    onClick: () => onNav(v),
    style: {
      color: cur === v ? 'var(--hub-cream)' : 'var(--hub-grey-300)',
      textDecoration: 'none',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      boxShadow: cur === v ? '0 2px 0 var(--hub-pink)' : 'none',
      paddingBottom: 2
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => onNav('book')
  }, "Book"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    tone: "dark",
    onClick: onLogin
  }, "Logg inn"))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/Home.jsx
try { (() => {
const HUB_LEAGUE_LOGO = {
  'Premier League': 'premier-league.png',
  'Champions League': 'champions-league.svg',
  'Formel 1': 'formel-1.svg',
  'Eliteserien': 'eliteserien.png',
  'Bundesliga': 'bundesliga.png',
  'LaLiga': 'laliga.png',
  'Serie A': 'serie-a.png',
  'Ligue 1': 'ligue-1.png',
  'NBA': 'nba.png',
  'NHL': 'nhl.png',
  'NFL': 'nfl.png',
  'EHF EURO 2026': 'ehf-euro.png',
  'ATP Basel': 'atp.png',
  'PDC European Championship': 'pdc.png',
  'LoL Worlds': 'lol-worlds.png',
  'UFC': 'ufc.png',
  'MotoGP': 'motogp.png',
  'Alpint verdenscup': 'fis.svg'
};
function LeagueLogo({
  league
}) {
  const file = HUB_LEAGUE_LOGO[league];
  const abbr = league.split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase();
  return /*#__PURE__*/React.createElement("div", {
    className: "hub-logo",
    style: {
      width: 56,
      height: 56,
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      border: file ? 0 : '2px solid var(--hub-ink-line)'
    }
  }, file ? /*#__PURE__*/React.createElement("img", {
    src: `../../assets/leagues/${file}`,
    alt: league,
    style: {
      maxWidth: 48,
      maxHeight: 44,
      objectFit: 'contain'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--hub-grey-400)'
    }
  }, abbr));
}
function MatchRow({
  m,
  onPick,
  compact
}) {
  const {
    Badge,
    Button
  } = window.HUBDesignSystem_d87c4c;
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "hub-matchrow",
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    onClick: () => onPick(m),
    style: {
      display: 'grid',
      gridTemplateColumns: '140px 56px minmax(0,1fr) auto',
      alignItems: 'center',
      gap: compact ? 16 : 24,
      padding: compact ? '10px 0' : '20px 0',
      borderTop: '1px solid var(--hub-ink-3)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--hub-cream)'
    }
  }, m.day), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-400)'
    }
  }, m.time)), /*#__PURE__*/React.createElement(LeagueLogo, {
    league: m.league
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      flexWrap: 'wrap',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--hub-grey-400)'
    }
  }, m.league), m.big && /*#__PURE__*/React.createElement(Badge, null, "Storkamp")), /*#__PURE__*/React.createElement("div", {
    className: "hub-mtitle",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: compact ? 18 : 24,
      letterSpacing: '-0.015em',
      color: h ? 'var(--hub-pink-light)' : 'var(--hub-cream)',
      transition: 'color var(--duration-fast)'
    }
  }, m.away ? `${m.home} – ${m.away}` : m.home)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: h ? 'primary' : 'outline',
    tone: "dark",
    iconRight: "arrow-right"
  }, "Velg rom"));
}
function Home({
  onDone,
  onNav = () => {}
}) {
  const {
    Eyebrow,
    Tag,
    Button,
    Card,
    Icon
  } = window.HUBDesignSystem_d87c4c;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "hub-hero",
    style: {
      position: 'relative',
      minHeight: 560,
      display: 'flex',
      alignItems: 'flex-end',
      background: 'url(../../assets/images/fasade.avif) center 40%/cover'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(23,20,26,0) 30%, rgba(23,20,26,.92) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1200,
      width: '100%',
      margin: '0 auto',
      padding: '0 var(--page-margin) 56px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark",
    style: {
      marginBottom: 14
    }
  }, "Private kamprom og gamingrom"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(36px,6vw,84px)',
      lineHeight: 1.02,
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--hub-cream)',
      maxWidth: 820,
      textWrap: 'balance'
    }
  }, "Ditt eget kamprom. Book det med gjengen."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 28px',
      fontSize: 'clamp(16px,2.2vw,19px)',
      lineHeight: 1.5,
      color: 'var(--hub-grey-300)',
      maxWidth: 620
    }
  }, "Private rom for vennegjenger med storskjerm, god lyd, gode sofaer og mat servert p\xE5 rommet. Booket p\xE5 forh\xE5nd, bare for dere."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => onNav('book')
  }, "Book rom"))), /*#__PURE__*/React.createElement(SportBooking, {
    id: "book",
    onDone: onDone
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--hub-ink-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-sec hub-split",
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '72px var(--page-margin)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "Gaming og simracing"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 16px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(30px,5vw,44px)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--hub-cream)',
      textWrap: 'balance'
    }
  }, "Spill p\xE5 storskjerm, eller kj\xF8r mot hverandre"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      fontSize: 17,
      lineHeight: 1.55,
      color: 'var(--hub-grey-300)',
      maxWidth: 520
    }
  }, "Fire gamingrom oppkalt etter spillklassikere, og to simracingrom med seks rigger hver. Alt er satt opp n\xE5r dere kommer."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 28,
      maxWidth: 520
    }
  }, [['game-controller', 'PS5, Xbox, Switch og gaming-PC', 'Kontrollere og headset til alle'], ['gauge', 'Simrigger med ratt, pedaler og sete', 'Book én rigg eller hele rommet'], ['trophy', 'Rundetider på storskjermen', 'Ukens raskeste havner på tavla']].map(([ic, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      padding: '12px 0',
      borderTop: '1px solid var(--hub-ink-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 28,
    color: "var(--hub-pink-light)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--hub-cream)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-400)'
    }
  }, d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    iconRight: "arrow-right",
    onClick: () => onNav('book:gaming')
  }, "Book gaming"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    tone: "dark",
    onClick: () => onNav('gaming')
  }, "Se spillene"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      aspectRatio: '16/9',
      background: 'url(../../assets/images/room-silverstone.avif) center/cover var(--hub-ink)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/3',
      background: 'url(../../assets/images/room-tomb-raider.avif) center/cover var(--hub-ink)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/3',
      background: 'url(../../assets/images/room-street-fighter-ii.avif) center/cover var(--hub-ink)'
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--hub-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-sec",
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '72px var(--page-margin)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "Mat og drikke"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 28px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(30px,5vw,44px)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--hub-cream)',
      textWrap: 'balance',
      maxWidth: 760
    }
  }, "Pizza du kommer tilbake for"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
      gap: 16,
      marginBottom: 32
    }
  }, [['El Clásico', 'Real Madrid – Barcelona', 'Tomatsaus, mozzarella og basilikum', 179, 'leaf', 'el-clasico'], ['Old Firm', 'Celtic – Rangers', 'Pulled pork, whisky-BBQ, rødløk og cheddar', 229, null, 'old-firm'], ['Derby della Madonnina', 'Inter – AC Milan', 'Salami Milano, mozzarella og chili', 199, 'flame', 'derby-della-madonnina']].map(([n, derby, d, p, ic, img]) => /*#__PURE__*/React.createElement("div", {
    key: n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '5/4',
      background: `url(../../assets/images/pizza-${img}.avif) center/cover var(--hub-ink-2)`,
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--hub-cream)'
    }
  }, n), ic && /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    color: ic === 'flame' ? '#e8735c' : '#7cc48a'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--hub-grey-300)'
    }
  }, kr(p))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    tone: "dark",
    iconRight: "arrow-right",
    onClick: () => onNav('menu')
  }, "Se hele menyen")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--hub-cream)',
      color: 'var(--hub-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-sec",
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '72px var(--page-margin)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Mer enn kamp"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 36px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(30px,5vw,44px)',
      letterSpacing: 'var(--tracking-display)',
      textWrap: 'balance'
    }
  }, "Book rommet til noe annet ogs\xE5"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
      gap: 16
    }
  }, [['For bedrifter', 'Bedrift', 'Møter, kick-off og teambuilding med storskjerm og servering.', 'Ta kontakt', 'bedrift'], ['For gjengen', 'Gaming', 'Konsoll, simracing og quiz på storskjerm med god lyd.', 'Book rom', 'book:gaming'], ['For anledningen', 'Selskap', 'Bursdag, utdrikningslag eller julebord. Vi ordner maten.', 'Ta kontakt', 'selskap']].map(([when, t, d, cta, v]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    variant: "accent",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--hub-grey-600)'
    }
  }, when), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      letterSpacing: '-0.015em'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--hub-grey-700)',
      fontSize: 16,
      lineHeight: 1.5,
      flex: 1
    }
  }, d), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconRight: "arrow-right",
    onClick: () => onNav(v),
    style: {
      alignSelf: 'flex-start',
      marginTop: 8
    }
  }, cta)))))));
}
Object.assign(window, {
  Home,
  LeagueLogo,
  MatchRow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/Inquiry.jsx
try { (() => {
const HUB_INQUIRY = {
  bedrift: {
    eyebrow: 'For bedrifter',
    title: 'Møterom med storskjerm og mat på bordet',
    lead: 'Book et rom til kick-off, kundekveld eller teambuilding. Skjermen tar HDMI og trådløs deling, og vi serverer når det passer dere.',
    packages: [['Dagmøte', '4 timer, kaffe hele dagen og lunsj', 'fra kr 395 per person'], ['Kundekveld', 'Kamp på skjermen, pizza og to enheter drikke', 'fra kr 545 per person'], ['Hele lokalet', 'Alle tre rommene og baren, opptil 36 personer', 'pris på forespørsel']],
    fields: ['Bedrift', 'Kontaktperson', 'E-post'],
    cta: 'Send forespørsel'
  },
  selskap: {
    eyebrow: 'For anledningen',
    title: 'Bursdag, utdrikningslag eller julebord',
    lead: 'Dere får rommet for dere selv, vi ordner maten. Sett på en kamp, spill eller ta med egen playlist.',
    packages: [['Bursdag', '3 timer, pizza og brus. Kake kan bestilles', 'fra kr 295 per person'], ['Utdrikningslag', 'Rom, quiz på skjermen, bøtte med øl og snacks', 'fra kr 445 per person'], ['Julebord', 'Treretters eller pizzabuffet, drikkepakke', 'fra kr 695 per person']],
    fields: ['Navn', 'E-post', 'Telefon'],
    cta: 'Send forespørsel'
  }
};
function Inquiry({
  kind,
  onKind
}) {
  const {
    Eyebrow,
    Card,
    Input,
    Select,
    Stepper,
    Button,
    Toast,
    Tag
  } = window.HUBDesignSystem_d87c4c;
  const c = HUB_INQUIRY[kind];
  const [pkg, setPkg] = React.useState(0);
  const [guests, setGuests] = React.useState(kind === 'bedrift' ? 12 : 8);
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    setPkg(0);
    setSent(false);
  }, [kind]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--hub-cream)',
      color: 'var(--hub-ink)',
      minHeight: 'calc(100vh - 68px)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    className: "hub-sec",
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '56px var(--page-margin) 96px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Selskap og bedrift"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '8px 0 12px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(38px,5vw,56px)',
      letterSpacing: 'var(--tracking-display)',
      maxWidth: 820,
      textWrap: 'balance'
    }
  }, "Book rom til arrangementet"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      fontSize: 'clamp(16px,2.2vw,18px)',
      lineHeight: 1.5,
      color: 'var(--hub-grey-700)',
      maxWidth: 640
    }
  }, "Fra bursdag og utdrikningslag til kick-off og kundekveld. Dere f\xE5r rommet for dere selv, vi ordner maten."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 32
    }
  }, [['selskap', 'Privat selskap'], ['bedrift', 'Bedrift']].map(([k, l]) => /*#__PURE__*/React.createElement(Tag, {
    key: k,
    selected: kind === k,
    onClick: () => onKind && onKind(k)
  }, l))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      fontSize: 16,
      lineHeight: 1.5,
      color: 'var(--hub-grey-700)',
      maxWidth: 640
    }
  }, c.lead), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))',
      gap: 'clamp(28px,5vw,40px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 8px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: '-0.015em',
      paddingBottom: 10,
      borderBottom: '3px solid var(--hub-pink)'
    }
  }, "Pakker"), c.packages.map(([n, d, p], i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: "hub-pkg",
    onClick: () => setPkg(i),
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      padding: '18px 16px',
      margin: '0 -16px',
      borderBottom: '1px solid var(--hub-cream-line)',
      cursor: 'pointer',
      background: pkg === i ? 'var(--hub-white)' : 'transparent',
      boxShadow: pkg === i ? 'inset 4px 0 0 var(--hub-pink)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 17
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-700)',
      marginTop: 2
    }
  }, d)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--hub-grey-700)',
      textAlign: 'right'
    }
  }, p)))), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, sent ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Toast, {
    kind: "success",
    title: "Foresp\xF8rselen er sendt",
    style: {
      width: '100%'
    }
  }, "Vi svarer innen \xE9n virkedag med tilbud og ledige datoer."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false),
    style: {
      alignSelf: 'flex-start'
    }
  }, "Send en til")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: '-0.015em'
    }
  }, c.packages[pkg][0]), /*#__PURE__*/React.createElement("div", {
    className: "hub-2col",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Dato",
    type: "date"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Tidspunkt",
    options: ['Formiddag', 'Ettermiddag', 'Kveld']
  })), /*#__PURE__*/React.createElement(Stepper, {
    label: "Antall personer",
    value: guests,
    min: 2,
    max: 36,
    onChange: setGuests,
    style: {
      display: 'flex'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,180px),1fr))',
      gap: 14
    }
  }, c.fields.map(f => /*#__PURE__*/React.createElement(Input, {
    key: f,
    label: f
  }))), /*#__PURE__*/React.createElement(Input, {
    label: "Noe vi b\xF8r vite?",
    placeholder: "Allergier, \xF8nsker, spesielle behov"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => setSent(true),
    style: {
      alignSelf: 'stretch'
    }
  }, c.cta))))));
}
window.Inquiry = Inquiry;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/Inquiry.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/Menu.jsx
try { (() => {
const HUB_MENU = {
  Mat: {
    intro: 'Alt serveres på rommet. Pizzaene er steinovnsbakt, 30 cm, og holder til to. Alle pizzaer kan fås med glutenfri bunn uten tillegg.',
    cols: [['Pizza'], ['Burgere og retter', 'Tilbehør']],
    groups: [{
      title: 'Pizza',
      items: [['El Clásico', 'Tomatsaus, mozzarella og basilikum', 179, 'Real Madrid – Barcelona', ['Gluten', 'Melk'], ['Glutenfri', 'Laktosefri', 'Vegansk']], ['Hudson River Derby', 'Tomatsaus, mozzarella og pepperoni', 199, 'New York Red Bulls – NYCFC', ['Gluten', 'Melk'], ['Glutenfri', 'Laktosefri']], ['Derby della Madonnina', 'Salami Milano, mozzarella og chili', 199, 'Inter – AC Milan', ['Gluten', 'Melk'], ['Glutenfri', 'Laktosefri']], ['Kıtalararası Derbi', 'Kebabkjøtt, rødløk, jalapeños og hvitløksdressing', 219, 'Fenerbahçe – Galatasaray', ['Gluten', 'Melk', 'Egg', 'Sennep'], ['Glutenfri', 'Laktosefri', 'Eggfri']], ['El Tráfico', 'Krydret kjøttdeig, mais, nachos og rømme', 219, 'LA Galaxy – LAFC', ['Gluten', 'Melk', 'Selleri'], ['Glutenfri', 'Laktosefri']], ['Revierderby', 'Currywurst, karriketchup og sprøstekt løk', 209, 'Dortmund – Schalke', ['Gluten', 'Melk', 'Sennep', 'Selleri'], ['Glutenfri', 'Laktosefri']], ['Old Firm', 'Pulled pork, whisky-BBQ, rødløk og cheddar', 229, 'Celtic – Rangers', ['Gluten', 'Melk', 'Sennep'], ['Glutenfri', 'Laktosefri']], ['Derby della Capitale', 'Carbonara med guanciale, pecorino og eggeplomme', 229, 'Roma – Lazio', ['Gluten', 'Melk', 'Egg'], ['Glutenfri', 'Laktosefri']], ['Superclásico', 'Biff, chimichurri, rødløk og mozzarella', 239, 'Boca Juniors – River Plate', ['Gluten', 'Melk'], ['Glutenfri', 'Laktosefri']], ['Derby della Lanterna', 'Pesto, grillede grønnsaker og mozzarella (vegetar)', 209, 'Genoa – Sampdoria', ['Gluten', 'Melk', 'Nøtter'], ['Glutenfri', 'Laktosefri', 'Vegansk', 'Nøttefri']], ['Tyne-Wear Derby', 'Sprøstekt kylling, ostesaus, cheddar og vårløk', 219, 'Newcastle – Sunderland', ['Gluten', 'Melk', 'Egg'], ['Glutenfri', 'Laktosefri']]]
    }, {
      title: 'Burgere og retter',
      items: [['Smashburger', 'Cheddar, sylteagurk og husets dressing, med pommes', 189, null, ['Gluten', 'Melk', 'Egg', 'Sennep', 'Sesam'], ['Glutenfri', 'Laktosefri', 'Sesamfri']], ['Dobbel smash', 'To burgere, bacon og cheddar, med pommes', 229, null, ['Gluten', 'Melk', 'Egg', 'Sennep', 'Sesam'], ['Glutenfri', 'Laktosefri', 'Sesamfri']], ['Halloumiburger', 'Coleslaw og chilimajones, med pommes (vegetar)', 179, null, ['Gluten', 'Melk', 'Egg', 'Sennep', 'Sesam'], ['Glutenfri', 'Vegansk med plantebasert burger']], ['Kyllingvinger', '12 stk, BBQ eller hot', 179, null, ['Sennep', 'Selleri']]]
    }, {
      title: 'Tilbehør',
      items: [['Loaded fries', 'Cheddar, jalapeños og rømme', 129, null, ['Melk'], ['Laktosefri', 'Vegansk']], ['Løkringer', 'Med aioli', 89, null, ['Gluten', 'Egg', 'Melk'], ['Glutenfri']], ['Hvitløksdressing', 'Eller chiliolje', 25, null, ['Egg', 'Sennep'], ['Vegansk']], ['Hvitløksbrød', 'Med smeltet ost', 79, null, ['Gluten', 'Melk'], ['Glutenfri', 'Laktosefri']]]
    }]
  },
  Drikke: {
    intro: 'Bestilles fra skjermen i rommet og kommer på bordet.',
    cols: [['Øl og cider', 'Vin'], ['Drinker', 'Alkoholfritt']],
    groups: [{
      title: 'Drinker',
      items: [['Red Devils', 'Tequila, blodappelsin, lime og chili', 159, 'Manchester United', null], ['Sky Blues', 'Vodka, blå curaçao, sitron og tonic', 149, 'Manchester City', null], ['The Toffees', 'Bourbon, toffeesirup, sitron og eggehvite', 159, 'Everton', ['Egg'], ['Vegansk']], ['The Magpies', 'Vodka, kaffelikør og espresso med hvitt skum', 159, 'Newcastle United', null], ['Black Cats', 'Mørk rom, ingefærøl og lime', 149, 'Sunderland', null], ['The Cherries', 'Gin, kirsebærlikør og sitron', 149, 'Bournemouth', null], ['The Canaries', 'Limoncello, prosecco og soda', 149, 'Norwich City', ['Sulfitt']], ['Galácticos', 'Cava med ferskenpuré og gullglitter', 159, 'Real Madrid', ['Sulfitt']], ['Blaugrana', 'Vodka, blåbær og granateple', 149, 'Barcelona', null], ['Rossoneri', 'Campari, rød vermut og soda', 149, 'AC Milan', ['Sulfitt']], ['La Vecchia Signora', 'Old fashioned med bourbon, bitter og appelsin', 169, 'Juventus', null], ['Schwarzgelben', 'Jägermeister, ananas og lime', 149, 'Borussia Dortmund', null], ['Les Phocéens', 'Pastis, mynte, sitron og isvann', 139, 'Marseille', null]]
    }, {
      title: 'Alkoholfritt',
      items: [['Erdinger Alkoholfrei', 'Alkoholfri hvete, 0,5 l', 79, null, ['Gluten']], ['Brus', '0,5 l', 45], ['Energidrikk', '0,33 l', 49], ['Kaffe', 'Kanne til bordet', 89]]
    }, {
      title: 'Øl og cider',
      items: [['Carlsberg', 'Pils fra fat, 0,5 l', 109, null, ['Gluten']], ['Heineken', 'Pils fra fat, 0,5 l', 115, null, ['Gluten']], ['Ringnes', 'Pils fra fat, 0,5 l', 105, null, ['Gluten']], ['Guinness', 'Stout fra fat, 0,5 l', 129, null, ['Gluten']], ['Amstel', 'Lager, flaske 0,33 l', 95, null, ['Gluten']], ['Bitburger', 'Pils, flaske 0,33 l', 99, null, ['Gluten']], ['Brahma', 'Lager, flaske 0,35 l', 95, null, ['Gluten']], ['Estrella Damm', 'Lager, flaske 0,33 l', 99, null, ['Gluten']], ['Newcastle Brown Ale', 'Brown ale, flaske 0,33 l', 109, null, ['Gluten']], ['Daura Damm', 'Glutenfri lager, flaske 0,33 l', 99, null, null], ['Peroni Nastro Azzurro', 'Lager, flaske 0,33 l', 99, null, ['Gluten']], ['Cider', '0,33 l', 99, null, ['Sulfitt']], ['Bøtte', '6 valgfrie flasker på is', 499, null, ['Gluten']]]
    }, {
      title: 'Vin',
      items: [['Hvitvin', 'Glass, 15 cl', 129, null, ['Sulfitt']], ['Rødvin', 'Glass, 15 cl', 129, null, ['Sulfitt']], ['Rosé', 'Glass, 15 cl', 129, null, ['Sulfitt']], ['Prosecco', 'Glass, 12 cl', 139, null, ['Sulfitt']], ['Hvitvin, flaske', '75 cl', 549, null, ['Sulfitt']], ['Rødvin, flaske', '75 cl', 549, null, ['Sulfitt']], ['Prosecco, flaske', '75 cl', 599, null, ['Sulfitt']]]
    }]
  },
  Snacks: {
    intro: 'Til kampstart eller gaming. Kommer på bordet når du vil.',
    cols: [['Til deling'], ['Søtt']],
    groups: [{
      title: 'Til deling',
      items: [['Nachos', 'Ost, salsa, guacamole og rømme', 159, null, ['Melk'], ['Laktosefri', 'Vegansk']], ['Popcorn', 'Stor bolle, salt eller karamell', 59, null, ['Melk'], ['Laktosefri']], ['Chips og dip', 'To poser og to dipper', 79, null, ['Melk'], ['Laktosefri']], ['Nøttemiks', 'Saltede nøtter', 49, null, ['Peanøtter', 'Nøtter']]]
    }, {
      title: 'Søtt',
      items: [['Godteskål', 'Blandet smågodt til bordet', 99, null, ['Gluten', 'Melk', 'Soya'], ['Glutenfri', 'Vegansk']], ['Sorbet', 'Tre kuler: mango, bringebær og sitron', 89, null, null], ['Brownies', '4 stk', 109, null, ['Gluten', 'Melk', 'Egg', 'Soya', 'Nøtter'], ['Glutenfri', 'Nøttefri']]]
    }]
  }
};
[['Mat', 'Pizza'], ['Drikke', 'Drinker']].forEach(([t, g]) => HUB_MENU[t].groups.find(x => x.title === g).items.sort((a, b) => {
  const k = s => s.replace(/^(the|la|le|les|el|los|las|il|die|der|das)\s+/i, '');
  return k(a[0]).localeCompare(k(b[0]), 'nb');
}));
const HUB_MENU_NO = (() => {
  let i = 0;
  const map = {};
  ['Mat', 'Drikke', 'Snacks'].forEach(k => HUB_MENU[k].groups.forEach(g => {
    if (k === 'Drikke' && g.title !== 'Drinker') return;
    g.items.forEach(it => {
      map[it[0]] = ++i;
    });
  }));
  return map;
})();
const HUB_MENU_TAGS = {
  'Derby della Madonnina': ['hot'],
  'Kıtalararası Derbi': ['hot'],
  'El Tráfico': ['hot'],
  'Kyllingvinger': ['hot'],
  'Red Devils': ['hot'],
  'El Clásico': ['veg'],
  'Derby della Lanterna': ['veg'],
  'Hvitløksbrød': ['veg'],
  'Løkringer': ['veg'],
  'Popcorn': ['veg'],
  'Chips og dip': ['veg'],
  'Brownies': ['veg'],
  'Halloumiburger': ['veg', 'hot'],
  'Loaded fries': ['veg', 'hot'],
  'Nachos': ['veg'],
  'Sorbet': ['vegan'],
  'Nøttemiks': ['vegan']
};
const HUB_TAG_ICON = {
  hot: ['flame', 'Sterk', '#c8442b'],
  veg: ['leaf', 'Vegetar', '#3f8a4f'],
  vegan: ['sprout', 'Vegansk', '#2f7a3f']
};
function MenuHeading({
  title,
  first
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: first ? '0 0 8px' : '32px 0 8px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: '-0.015em',
      paddingBottom: 10,
      borderBottom: '3px solid var(--hub-pink)'
    }
  }, title);
}
function MenuItem({
  it
}) {
  const {
    Icon
  } = window.HUBDesignSystem_d87c4c;
  const [n, d, p, t, al, alt] = it;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'clamp(10px,2vw,16px)',
      alignItems: 'baseline',
      padding: '14px 0',
      borderBottom: '1px solid var(--hub-cream-line)'
    }
  }, HUB_MENU_NO[n] && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      flex: 'none',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--hub-pink-deep)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, HUB_MENU_NO[n]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontWeight: 700,
      fontSize: 16
    }
  }, n, (HUB_MENU_TAGS[n] || []).map(k => /*#__PURE__*/React.createElement("span", {
    key: k,
    title: HUB_TAG_ICON[k][1],
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: HUB_TAG_ICON[k][0],
    size: 16,
    color: HUB_TAG_ICON[k][2]
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-700)',
      marginTop: 2
    }
  }, d), t && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--hub-grey-600)',
      marginTop: 4
    }
  }, t), alt && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--hub-pink-deep)',
      marginTop: 4
    }
  }, "Kan f\xE5s: ", alt.join(' · ').toLowerCase().replace(/^./, c => c.toUpperCase())), al && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 4,
      marginTop: 6
    }
  }, al.map(a => /*#__PURE__*/React.createElement("span", {
    key: a,
    style: {
      fontSize: 11,
      fontWeight: 600,
      lineHeight: '18px',
      padding: '0 6px',
      border: '1px solid var(--hub-cream-line)',
      color: 'var(--hub-grey-700)'
    }
  }, a)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: 'nowrap'
    }
  }, kr(p)));
}
function Menu({
  onBook
}) {
  const {
    Eyebrow,
    Tabs,
    Button,
    Icon
  } = window.HUBDesignSystem_d87c4c;
  const [tab, setTab] = React.useState('Mat');
  const [narrow, setNarrow] = React.useState(window.innerWidth < 768);
  React.useEffect(() => {
    const f = () => setNarrow(window.innerWidth < 768);
    window.addEventListener('resize', f);
    return () => window.removeEventListener('resize', f);
  }, []);
  const sec = HUB_MENU[tab];
  const byTitle = Object.fromEntries(sec.groups.map(g => [g.title, g]));
  const cols = (narrow ? [sec.cols.flat()] : sec.cols).map(titles => titles.flatMap((ti, gi) => [{
    h: ti,
    first: gi === 0
  }, ...byTitle[ti].items.map(it => ({
    it
  }))]));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--hub-cream)',
      color: 'var(--hub-ink)',
      minHeight: 'calc(100vh - 68px)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    className: "hub-sec",
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '56px var(--page-margin) 96px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Mat"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '8px 0 12px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(34px,6vw,52px)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, "Mat, drikke og snacks"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 32px',
      fontSize: 18,
      lineHeight: 1.5,
      color: 'var(--hub-grey-700)',
      maxWidth: 640
    }
  }, "Dette kan du bestille p\xE5 rommet."), /*#__PURE__*/React.createElement(Tabs, {
    items: Object.keys(HUB_MENU),
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 8px',
      fontSize: 16,
      color: 'var(--hub-grey-700)',
      maxWidth: 640
    }
  }, sec.intro), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap',
      fontSize: 13,
      color: 'var(--hub-grey-700)'
    }
  }, Object.values(HUB_TAG_ICON).map(([ic, l, c]) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 16,
    color: c
  }), l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${cols.length},minmax(0,1fr))`,
      columnGap: 'clamp(32px,5vw,56px)',
      marginTop: 24
    }
  }, cols.map((cells, ci) => /*#__PURE__*/React.createElement("div", {
    key: ci,
    style: {
      minWidth: 0
    }
  }, cells.map((c, ri) => c.h ? /*#__PURE__*/React.createElement(MenuHeading, {
    key: ri,
    title: c.h,
    first: c.first
  }) : /*#__PURE__*/React.createElement(MenuItem, {
    key: ri,
    it: c.it
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      flexWrap: 'wrap',
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right",
    onClick: onBook
  }, "Book rom"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-600)'
    }
  }, "Allergener er merket p\xE5 hver rett, og de fleste kan lages glutenfrie eller laktosefrie. Sp\xF8r oss om du er usikker."))));
}
window.Menu = Menu;
window.HUB_MENU = HUB_MENU;
Object.assign(window, {
  HUB_MENU_NO,
  HUB_MENU_TAGS,
  HUB_TAG_ICON
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/Menu.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/RoomPicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function RoomPicker({
  match,
  onBack,
  onPick
}) {
  const {
    Eyebrow,
    RoomCard,
    Button,
    Stepper
  } = window.HUBDesignSystem_d87c4c;
  const [hours, setHours] = React.useState(3);
  const [sel, setSel] = React.useState(null);
  const rooms = window.HUB_DATA.rooms;
  const room = rooms.find(r => r.id === sel);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '48px var(--page-margin) 180px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    tone: "dark",
    size: "sm",
    icon: "arrow-left",
    onClick: onBack,
    style: {
      marginLeft: -14
    }
  }, "Alle kamper"), /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark",
    style: {
      margin: '24px 0 8px'
    }
  }, match.league, " \xB7 ", match.day, " \xB7 ", match.time), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(32px,6vw,52px)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--hub-cream)'
    }
  }, match.away ? `${match.home} – ${match.away}` : match.home), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 36px',
      fontSize: 17,
      color: 'var(--hub-grey-300)'
    }
  }, "Velg rom og hvor lenge dere vil v\xE6re."), [['Sportsrom', 'For 3 til 12 personer', rooms.filter(r => !r.type)], ['Gamingrom', 'Mindre rom for 4 til 6, med konsoll og PC', rooms.filter(r => r.type === 'gaming')]].map(([t, sub, list]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 14,
      flexWrap: 'wrap',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      letterSpacing: '-0.015em',
      color: 'var(--hub-cream)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--hub-grey-400)'
    }
  }, sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
      gap: 20
    }
  }, list.map(r => {
    const sold = (r.soldOut || []).includes(match.id);
    return /*#__PURE__*/React.createElement(RoomCard, _extends({
      key: r.id
    }, r, {
      club: r.type === 'gaming' ? 'Konsoll og PC' : 'Storskjerm og surroundlyd',
      closed: null,
      number: null,
      price: `${kr(r.perHour)} / t`,
      status: sold ? 'Utsolgt' : 'Ledig',
      selected: sel === r.id,
      onClick: sold ? undefined : () => setSel(r.id),
      style: {
        opacity: sold ? 0.5 : 1
      }
    }));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      background: 'var(--hub-ink-2)',
      borderTop: '3px solid var(--hub-pink)',
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-bar",
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '14px var(--page-margin)',
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-bar-info",
    style: {
      flex: 1,
      color: 'var(--hub-cream)',
      fontSize: 15
    }
  }, room ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, room.name), " \xB7 ", room.capacity) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--hub-grey-400)'
    }
  }, "Ingen rom valgt")), /*#__PURE__*/React.createElement(Stepper, {
    label: "Timer",
    value: hours,
    min: 2,
    max: 6,
    onChange: setHours,
    tone: "dark"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--hub-cream)',
      minWidth: 110,
      textAlign: 'right'
    }
  }, room ? kr(room.perHour * hours) : '–'), /*#__PURE__*/React.createElement(Button, {
    disabled: !room,
    iconRight: "arrow-right",
    onClick: () => onPick(room, hours)
  }, "Velg mat"))));
}
window.RoomPicker = RoomPicker;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/RoomPicker.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/Rooms.jsx
try { (() => {
function Rooms({
  onBook,
  onGaming,
  onSim
}) {
  const {
    Eyebrow,
    Button,
    Icon,
    Tag
  } = window.HUBDesignSystem_d87c4c;
  const all = window.HUB_DATA.rooms;
  const groups = [['Sportsrom', 'Private rom med storskjerm for kamper og sendinger. Plass til 3 til 12 personer.', all.filter(r => !r.type)], ['Gaming og simracing', 'Mindre rom med konsoll og PC, og simracing med seks rigger side om side.', all.filter(r => r.type)]];
  const kit = [['tv', 'Storskjerm'], ['volume-2', 'Surroundlyd'], ['gamepad-2', 'PS5 og Xbox'], ['tablet', 'Bestill mat fra skjermen'], ['wifi', 'Wifi og HDMI'], ['lock', 'Bare dere i rommet']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "hub-sec",
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '56px var(--page-margin) 72px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "Rom"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '8px 0 8px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(38px,5vw,56px)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--hub-cream)'
    }
  }, "Finn rommet som passer gjengen"), groups.map(([title, sub, rooms]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 6px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(26px,4vw,32px)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--hub-cream)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      fontSize: 16,
      color: 'var(--hub-grey-300)'
    }
  }, sub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,280px),1fr))',
      gap: 'clamp(16px,3vw,24px)'
    }
  }, rooms.map(r => {
    const g = r.type === 'gaming',
      sim = r.type === 'sim';
    return /*#__PURE__*/React.createElement("article", {
      key: r.id,
      style: {
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--hub-ink-2)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: '16/10',
        background: r.image ? `url(${r.image}) center/cover var(--hub-ink)` : 'var(--hub-ink-3)',
        display: 'grid',
        placeItems: 'center'
      }
    }, !r.image && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 13,
        color: 'var(--hub-grey-400)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "image",
      size: 18
    }), "Bilde kommer")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '18px 20px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--hub-grey-400)'
      }
    }, sim ? 'Simracing' : g ? 'Gaming' : 'Sportsrom'), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 24,
        letterSpacing: '-0.015em',
        color: 'var(--hub-cream)'
      }
    }, r.name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4px 16px',
        fontSize: 14,
        color: 'var(--hub-grey-300)',
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 16
    }), r.capacity), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: sim ? 'gauge' : g ? 'gamepad-2' : 'tv',
      size: 16
    }), sim ? 'Ratt og pedaler' : g ? 'Konsoll og PC' : 'Storskjerm')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        marginTop: 'auto',
        paddingTop: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: 'var(--hub-cream)'
      }
    }, sim && /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 400,
        color: 'var(--hub-grey-400)',
        fontSize: 14
      }
    }, "fra "), kr(r.perHour), " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 400,
        color: 'var(--hub-grey-400)',
        fontSize: 14
      }
    }, "/ ", sim ? 'rigg / time' : 'time')), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      tone: "dark",
      iconRight: "arrow-right",
      onClick: sim ? onSim : g ? onGaming : onBook
    }, "Book"))));
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--hub-cream)',
      color: 'var(--hub-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-sec",
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '56px var(--page-margin)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 28px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 32,
      letterSpacing: 'var(--tracking-display)'
    }
  }, "Inkludert i alle rom"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))',
      gap: '16px 32px'
    }
  }, kit.map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      paddingBottom: 16,
      borderBottom: '1px solid var(--hub-cream-line)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22,
    color: "var(--hub-pink-deep)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 16
    }
  }, t)))))));
}
window.Rooms = Rooms;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/Rooms.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/Sport.jsx
try { (() => {
function Sport({
  onPick
}) {
  const {
    Eyebrow,
    Button,
    Tag
  } = window.HUBDesignSystem_d87c4c;
  const D = window.HUB_DATA;
  const matches = D.matches.slice().sort((a, b) => parseInt(a.day.match(/\d+/)) - parseInt(b.day.match(/\d+/)) || a.time.localeCompare(b.time));
  const [league, setLeague] = React.useState(null);
  const leagues = [...new Map(matches.map(m => [m.league, m])).values()].map(m => ({
    name: m.league,
    sport: m.sport,
    n: matches.filter(x => x.league === m.league).length
  }));
  const list = matches.filter(m => !league || m.league === league);
  const sports = [...new Set(leagues.map(l => l.sport))];
  const [scat, setScat] = React.useState('Alle');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--hub-ink-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '40px var(--page-margin) 40px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "Storskjerm"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '8px 0 8px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(30px,4vw,40px)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--hub-cream)'
    }
  }, "Sendinger"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      fontSize: 15,
      color: 'var(--hub-grey-300)'
    }
  }, "Sport, show og andre live-events vi viser. Velg en turnering eller et program for \xE5 se sendingene, og en sending for \xE5 booke rom. Film kan bookes direkte."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 24
    }
  }, ['Alle', ...sports].map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    tone: "dark",
    selected: scat === c,
    onClick: () => setScat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      columns: '260px 4',
      columnGap: 32
    }
  }, sports.filter(c => scat === 'Alle' || c === scat).map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      breakInside: 'avoid',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 4px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--hub-cream)',
      paddingBottom: 6,
      borderBottom: '3px solid var(--hub-pink)'
    }
  }, c), leagues.filter(l => l.sport === c).map(l => /*#__PURE__*/React.createElement("div", {
    key: l.name,
    onClick: () => setLeague(league === l.name ? null : l.name),
    style: {
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      padding: '8px 0',
      borderBottom: '1px solid var(--hub-ink-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: league === l.name ? 'var(--hub-pink-light)' : 'var(--hub-cream)',
      fontWeight: 600,
      fontSize: 15
    }
  }, l.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--hub-grey-400)',
      whiteSpace: 'nowrap'
    }
  }, l.n, " ", l.n === 1 ? 'sending' : 'sendinger')))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--hub-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '40px var(--page-margin) 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 16,
      flexWrap: 'wrap',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--hub-cream)'
    }
  }, league || 'Kommende sendinger'), league && /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    tone: "dark",
    icon: "x",
    onClick: () => setLeague(null)
  }, "Vis alle")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--hub-ink-3)'
    }
  }, list.map(m => /*#__PURE__*/React.createElement(MatchRow, {
    compact: true,
    key: m.id,
    m: m,
    onPick: onPick
  }))))));
}
window.Sport = Sport;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/Sport.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/data.js
try { (() => {
window.HUB_DATA = {
  matches: [{
    id: 'm1',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Arsenal',
    away: 'Tottenham',
    day: 'Lør 18. okt',
    time: '18:30',
    big: true
  }, {
    id: 'm2',
    sport: 'Fotball',
    league: 'Eliteserien',
    home: 'Rosenborg',
    away: 'Molde',
    day: 'Søn 19. okt',
    time: '17:00'
  }, {
    id: 'm6',
    sport: 'Fotball',
    league: 'LaLiga',
    home: 'Barcelona',
    away: 'Atlético Madrid',
    day: 'Lør 18. okt',
    time: '21:00'
  }, {
    id: 'm7',
    sport: 'Fotball',
    league: 'Bundesliga',
    home: 'Dortmund',
    away: 'Bayern München',
    day: 'Lør 18. okt',
    time: '18:30',
    big: true
  }, {
    id: 'm8',
    sport: 'Fotball',
    league: 'Serie A',
    home: 'Inter',
    away: 'Juventus',
    day: 'Søn 19. okt',
    time: '20:45'
  }, {
    id: 'm9',
    sport: 'Fotball',
    league: 'Ligue 1',
    home: 'PSG',
    away: 'Marseille',
    day: 'Søn 19. okt',
    time: '20:45'
  }, {
    id: 'm10',
    sport: 'USA-sport',
    league: 'NFL',
    home: 'Kansas City Chiefs',
    away: 'Buffalo Bills',
    day: 'Søn 19. okt',
    time: '22:25'
  }, {
    id: 'm11',
    sport: 'USA-sport',
    league: 'NHL',
    home: 'Toronto Maple Leafs',
    away: 'Boston Bruins',
    day: 'Tir 21. okt',
    time: '01:00'
  }, {
    id: 'm12',
    sport: 'USA-sport',
    league: 'NBA',
    home: 'Los Angeles Lakers',
    away: 'Golden State Warriors',
    day: 'Ons 22. okt',
    time: '04:00'
  }, {
    id: 'm3',
    sport: 'Motorsport',
    league: 'Formel 1',
    home: 'USAs Grand Prix',
    away: null,
    day: 'Søn 19. okt',
    time: '21:00'
  }, {
    id: 'm4',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Real Madrid',
    away: 'Liverpool',
    day: 'Tir 21. okt',
    time: '21:00',
    big: true
  }, {
    id: 'm5',
    sport: 'Håndball',
    league: 'EHF EURO 2026',
    home: 'Norge',
    away: 'Danmark',
    day: 'Ons 22. okt',
    time: '18:15'
  }, {
    id: 'm13',
    sport: 'Tennis',
    league: 'ATP Basel',
    home: 'Casper Ruud',
    away: 'Holger Rune',
    day: 'Tor 23. okt',
    time: '19:00'
  }, {
    id: 'm14',
    sport: 'Darts',
    league: 'PDC European Championship',
    home: 'Finalekveld',
    away: null,
    day: 'Søn 26. okt',
    time: '20:00'
  }, {
    id: 'm15',
    sport: 'E-sport',
    league: 'LoL Worlds',
    home: 'Kvartfinale',
    away: null,
    day: 'Fre 24. okt',
    time: '11:00'
  }, {
    id: 'm16',
    sport: 'Kampsport',
    league: 'UFC',
    home: 'Hovedkort',
    away: null,
    day: 'Søn 26. okt',
    time: '04:00',
    big: true
  }, {
    id: 'm17',
    sport: 'Motorsport',
    league: 'MotoGP',
    home: 'Malaysias Grand Prix',
    away: null,
    day: 'Søn 26. okt',
    time: '08:00'
  }, {
    id: 'm18',
    sport: 'Vintersport',
    league: 'Alpint verdenscup',
    home: 'Sölden, storslalåm menn',
    away: null,
    day: 'Søn 26. okt',
    time: '10:00',
    big: true
  }, {
    id: 'm19',
    sport: 'Vintersport',
    league: 'Alpint verdenscup',
    home: 'Sölden, storslalåm kvinner',
    away: null,
    day: 'Lør 25. okt',
    time: '10:00'
  }, {
    id: 'x1',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Nottingham Forest',
    away: 'Chelsea',
    day: 'Lør 18. okt',
    time: '13:30'
  }, {
    id: 'x2',
    sport: 'Fotball',
    league: 'LaLiga',
    home: 'Sevilla',
    away: 'Mallorca',
    day: 'Lør 18. okt',
    time: '14:00'
  }, {
    id: 'x3',
    sport: 'Fotball',
    league: 'Serie A',
    home: 'Napoli',
    away: 'Torino',
    day: 'Lør 18. okt',
    time: '15:00'
  }, {
    id: 'x4',
    sport: 'Fotball',
    league: 'Bundesliga',
    home: 'Leverkusen',
    away: 'Freiburg',
    day: 'Lør 18. okt',
    time: '15:30'
  }, {
    id: 'x5',
    sport: 'Fotball',
    league: 'Bundesliga',
    home: 'Stuttgart',
    away: 'Wolfsburg',
    day: 'Lør 18. okt',
    time: '15:30'
  }, {
    id: 'x6',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Brighton',
    away: 'Newcastle',
    day: 'Lør 18. okt',
    time: '16:00'
  }, {
    id: 'x7',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Burnley',
    away: 'Leeds',
    day: 'Lør 18. okt',
    time: '16:00'
  }, {
    id: 'x8',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Crystal Palace',
    away: 'Bournemouth',
    day: 'Lør 18. okt',
    time: '16:00'
  }, {
    id: 'x9',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Manchester City',
    away: 'Everton',
    day: 'Lør 18. okt',
    time: '16:00'
  }, {
    id: 'x10',
    sport: 'Fotball',
    league: 'LaLiga',
    home: 'Real Madrid',
    away: 'Getafe',
    day: 'Lør 18. okt',
    time: '16:15'
  }, {
    id: 'x11',
    sport: 'Fotball',
    league: 'Ligue 1',
    home: 'Lyon',
    away: 'Lille',
    day: 'Lør 18. okt',
    time: '17:00'
  }, {
    id: 'x12',
    sport: 'Fotball',
    league: 'Serie A',
    home: 'Roma',
    away: 'Atalanta',
    day: 'Lør 18. okt',
    time: '18:00'
  }, {
    id: 'x13',
    sport: 'Fotball',
    league: 'Serie A',
    home: 'Lazio',
    away: 'Fiorentina',
    day: 'Søn 19. okt',
    time: '12:30'
  }, {
    id: 'x14',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Liverpool',
    away: 'Manchester United',
    day: 'Søn 19. okt',
    time: '15:00',
    big: true
  }, {
    id: 'x15',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Aston Villa',
    away: 'West Ham',
    day: 'Søn 19. okt',
    time: '15:00'
  }, {
    id: 'x16',
    sport: 'Fotball',
    league: 'Eliteserien',
    home: 'Bodø/Glimt',
    away: 'Brann',
    day: 'Søn 19. okt',
    time: '17:00'
  }, {
    id: 'x17',
    sport: 'Fotball',
    league: 'Eliteserien',
    home: 'Viking',
    away: 'Lillestrøm',
    day: 'Søn 19. okt',
    time: '17:00'
  }, {
    id: 'x18',
    sport: 'Fotball',
    league: 'Bundesliga',
    home: 'Frankfurt',
    away: 'RB Leipzig',
    day: 'Søn 19. okt',
    time: '17:30'
  }, {
    id: 'x19',
    sport: 'Fotball',
    league: 'Eliteserien',
    home: 'Vålerenga',
    away: 'Tromsø',
    day: 'Søn 19. okt',
    time: '19:15'
  }, {
    id: 'x20',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'West Ham',
    away: 'Brentford',
    day: 'Man 20. okt',
    time: '21:00'
  }, {
    id: 'x21',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Barcelona',
    away: 'Olympiacos',
    day: 'Tir 21. okt',
    time: '18:45'
  }, {
    id: 'x22',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Kairat',
    away: 'Pafos',
    day: 'Tir 21. okt',
    time: '18:45'
  }, {
    id: 'x23',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Arsenal',
    away: 'Atlético Madrid',
    day: 'Tir 21. okt',
    time: '21:00',
    big: true
  }, {
    id: 'x24',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Leverkusen',
    away: 'PSG',
    day: 'Tir 21. okt',
    time: '21:00'
  }, {
    id: 'x25',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Newcastle',
    away: 'Benfica',
    day: 'Tir 21. okt',
    time: '21:00'
  }, {
    id: 'x26',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Villarreal',
    away: 'Manchester City',
    day: 'Tir 21. okt',
    time: '21:00'
  }, {
    id: 'x27',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'København',
    away: 'Dortmund',
    day: 'Tir 21. okt',
    time: '21:00'
  }, {
    id: 'x28',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Athletic Club',
    away: 'Qarabağ',
    day: 'Ons 22. okt',
    time: '18:45'
  }, {
    id: 'x29',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Galatasaray',
    away: 'Bodø/Glimt',
    day: 'Ons 22. okt',
    time: '18:45',
    big: true
  }, {
    id: 'x30',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Bayern München',
    away: 'Club Brugge',
    day: 'Ons 22. okt',
    time: '21:00'
  }, {
    id: 'x31',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Chelsea',
    away: 'Ajax',
    day: 'Ons 22. okt',
    time: '21:00'
  }, {
    id: 'x32',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Inter',
    away: 'Union SG',
    day: 'Ons 22. okt',
    time: '21:00'
  }, {
    id: 'x33',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Juventus',
    away: 'Monaco',
    day: 'Ons 22. okt',
    time: '21:00'
  }, {
    id: 'x34',
    sport: 'Fotball',
    league: 'Champions League',
    home: 'Marseille',
    away: 'Sporting',
    day: 'Ons 22. okt',
    time: '21:00'
  }, {
    id: 'x35',
    sport: 'Fotball',
    league: 'Europa League',
    home: 'Lyon',
    away: 'Basel',
    day: 'Tor 23. okt',
    time: '18:45'
  }, {
    id: 'x36',
    sport: 'Fotball',
    league: 'Europa League',
    home: 'Brann',
    away: 'Rangers',
    day: 'Tor 23. okt',
    time: '21:00',
    big: true
  }, {
    id: 'x37',
    sport: 'Fotball',
    league: 'Europa League',
    home: 'Aston Villa',
    away: 'Feyenoord',
    day: 'Tor 23. okt',
    time: '21:00'
  }, {
    id: 'x38',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Leeds',
    away: 'West Ham',
    day: 'Lør 25. okt',
    time: '13:30'
  }, {
    id: 'x39',
    sport: 'Fotball',
    league: 'Bundesliga',
    home: 'Bayern München',
    away: 'Mönchengladbach',
    day: 'Lør 25. okt',
    time: '15:30'
  }, {
    id: 'x40',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Chelsea',
    away: 'Sunderland',
    day: 'Lør 25. okt',
    time: '16:00'
  }, {
    id: 'x41',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Newcastle',
    away: 'Fulham',
    day: 'Lør 25. okt',
    time: '16:00'
  }, {
    id: 'x42',
    sport: 'Fotball',
    league: 'Serie A',
    home: 'Inter',
    away: 'Napoli',
    day: 'Lør 25. okt',
    time: '18:00',
    big: true
  }, {
    id: 'x43',
    sport: 'Fotball',
    league: 'Bundesliga',
    home: 'Dortmund',
    away: 'Köln',
    day: 'Lør 25. okt',
    time: '18:30'
  }, {
    id: 'x44',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Manchester United',
    away: 'Brighton',
    day: 'Lør 25. okt',
    time: '18:30'
  }, {
    id: 'x45',
    sport: 'Fotball',
    league: 'Serie A',
    home: 'AC Milan',
    away: 'Pisa',
    day: 'Lør 25. okt',
    time: '20:45'
  }, {
    id: 'x46',
    sport: 'Fotball',
    league: 'Ligue 1',
    home: 'PSG',
    away: 'Nantes',
    day: 'Lør 25. okt',
    time: '21:05'
  }, {
    id: 'x47',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Arsenal',
    away: 'Crystal Palace',
    day: 'Søn 26. okt',
    time: '15:00'
  }, {
    id: 'x48',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Aston Villa',
    away: 'Manchester City',
    day: 'Søn 26. okt',
    time: '15:00'
  }, {
    id: 'x49',
    sport: 'Fotball',
    league: 'LaLiga',
    home: 'Real Madrid',
    away: 'Barcelona',
    day: 'Søn 26. okt',
    time: '16:15',
    big: true
  }, {
    id: 'x50',
    sport: 'Fotball',
    league: 'Eliteserien',
    home: 'Rosenborg',
    away: 'Bodø/Glimt',
    day: 'Søn 26. okt',
    time: '17:00'
  }, {
    id: 'x51',
    sport: 'Fotball',
    league: 'Eliteserien',
    home: 'Brann',
    away: 'Molde',
    day: 'Søn 26. okt',
    time: '17:00'
  }, {
    id: 'x52',
    sport: 'Fotball',
    league: 'Premier League',
    home: 'Brentford',
    away: 'Liverpool',
    day: 'Søn 26. okt',
    time: '17:30'
  }, {
    id: 'x53',
    sport: 'USA-sport',
    league: 'NFL',
    home: 'New York Jets',
    away: 'Cincinnati Bengals',
    day: 'Søn 26. okt',
    time: '19:00'
  }, {
    id: 'x54',
    sport: 'Fotball',
    league: 'Serie A',
    home: 'Juventus',
    away: 'Lazio',
    day: 'Søn 26. okt',
    time: '20:45'
  }, {
    id: 'x55',
    sport: 'Motorsport',
    league: 'Formel 1',
    home: 'Mexicos Grand Prix',
    away: null,
    day: 'Søn 26. okt',
    time: '21:00'
  }, {
    id: 'l1',
    sport: 'Show og konkurranser',
    league: "Ballon d'Or",
    home: 'Utdelingen i Paris',
    away: null,
    day: 'Man 20. okt',
    time: '20:30',
    dur: 180
  }, {
    id: 'l2',
    sport: 'Show og konkurranser',
    league: 'Skal vi danse',
    home: 'Liveshow',
    away: null,
    day: 'Fre 24. okt',
    time: '20:00',
    dur: 120
  }, {
    id: 'l3',
    sport: 'Show og konkurranser',
    league: 'Stjernekamp',
    home: 'Finale',
    away: null,
    day: 'Lør 25. okt',
    time: '19:50',
    dur: 150,
    big: true
  }],
  films: [{
    id: 'f1',
    title: 'Dune: Part Two',
    year: 2024,
    min: 166,
    on: ['Max']
  }, {
    id: 'f2',
    title: 'Oppenheimer',
    year: 2023,
    min: 180,
    on: ['Viaplay', 'Prime Video']
  }, {
    id: 'f3',
    title: 'Top Gun: Maverick',
    year: 2022,
    min: 131,
    on: ['SkyShowtime', 'Prime Video']
  }, {
    id: 'f4',
    title: 'Barbie',
    year: 2023,
    min: 114,
    on: ['Max']
  }, {
    id: 'f5',
    title: 'Gudfaren',
    year: 1972,
    min: 175,
    on: ['SkyShowtime']
  }, {
    id: 'f6',
    title: 'Interstellar',
    year: 2014,
    min: 169,
    on: ['Prime Video']
  }, {
    id: 'f7',
    title: 'Inception',
    year: 2010,
    min: 148,
    on: ['Netflix']
  }, {
    id: 'f8',
    title: 'Mamma Mia!',
    year: 2008,
    min: 108,
    on: ['Netflix', 'Viaplay']
  }, {
    id: 'f9',
    title: 'Hjemme alene',
    year: 1990,
    min: 103,
    on: ['Disney+']
  }, {
    id: 'f10',
    title: 'Titanic',
    year: 1997,
    min: 194,
    on: ['Disney+']
  }, {
    id: 'f11',
    title: 'Kongens nei',
    year: 2016,
    min: 133,
    on: ['NRK TV', 'Netflix']
  }, {
    id: 'f12',
    title: 'The Batman',
    year: 2022,
    min: 176,
    on: []
  }],
  rooms: [{
    id: 'r1',
    number: 1,
    name: 'Highfield Road',
    club: 'Coventry',
    closed: 2005,
    image: '../../assets/images/room-highfield-road.avif',
    capacity: 'Opptil 3',
    perHour: 590
  }, {
    id: 'r2',
    number: 2,
    name: 'Filbert Street',
    club: 'Leicester',
    closed: 2002,
    image: '../../assets/images/room-filbert-street.avif',
    capacity: 'Opptil 3',
    perHour: 590
  }, {
    id: 'r3',
    number: 3,
    name: 'Roker Park',
    club: 'Sunderland',
    closed: 1997,
    image: '../../assets/images/room-roker-park.avif',
    capacity: 'Opptil 12',
    perHour: 1690,
    soldOut: ['m1']
  }, {
    id: 'r4',
    number: 4,
    name: 'Maine Road',
    club: 'Manchester City',
    closed: 2003,
    image: '../../assets/images/room-maine-road.avif',
    capacity: 'Opptil 6',
    perHour: 890
  }, {
    id: 'r5',
    number: 5,
    name: 'Highbury',
    club: 'Arsenal',
    closed: 2006,
    image: '../../assets/images/room-highbury.avif',
    capacity: 'Opptil 8',
    perHour: 1190,
    soldOut: ['m1']
  }, {
    id: 'r6',
    number: 6,
    name: 'Upton Park',
    club: 'West Ham',
    closed: 2016,
    image: '../../assets/images/room-upton-park.avif',
    capacity: 'Opptil 4',
    perHour: 690
  }, {
    id: 'g1',
    number: 7,
    type: 'gaming',
    name: 'Tomb Raider',
    club: 'Core Design, 1996',
    image: '../../assets/images/room-tomb-raider.avif',
    capacity: 'Opptil 4',
    perHour: 590
  }, {
    id: 'g2',
    number: 8,
    type: 'gaming',
    name: 'Crash Bandicoot',
    club: 'Naughty Dog, 1996',
    image: '../../assets/images/room-crash-bandicoot.avif',
    capacity: 'Opptil 4',
    perHour: 590
  }, {
    id: 'g3',
    number: 9,
    type: 'gaming',
    name: 'Street Fighter II',
    club: 'Capcom, 1991',
    image: '../../assets/images/room-street-fighter-ii.avif',
    capacity: 'Opptil 6',
    perHour: 690,
    soldOut: ['m1']
  }, {
    id: 'g4',
    number: 10,
    type: 'gaming',
    name: 'Doom',
    club: 'id Software, 1993',
    image: '../../assets/images/room-doom.avif',
    capacity: 'Opptil 6',
    perHour: 690
  }, {
    id: 's1',
    number: 11,
    type: 'sim',
    name: 'Silverstone',
    image: '../../assets/images/room-silverstone.avif',
    rigs: 6,
    capacity: '6 rigger',
    perHour: 249,
    wholeRoom: 1290
  }, {
    id: 's2',
    number: 12,
    type: 'sim',
    name: 'Monza',
    image: '../../assets/images/room-monza.avif',
    rigs: 6,
    capacity: '6 rigger',
    perHour: 249,
    wholeRoom: 1290
  }],
  lapTimes: [{
    name: 'Martin H.',
    track: 'Spa',
    time: '2:18.402'
  }, {
    name: 'Ida S.',
    track: 'Spa',
    time: '2:18.977'
  }, {
    name: 'Jonas B.',
    track: 'Spa',
    time: '2:19.310'
  }, {
    name: 'Emil K.',
    track: 'Spa',
    time: '2:20.045'
  }, {
    name: 'Sara L.',
    track: 'Spa',
    time: '2:20.512'
  }],
  food: [{
    id: 'f1',
    name: 'Klassiker',
    desc: 'Burgere, pommes og dip',
    price: 245
  }, {
    id: 'f2',
    name: 'Vegetar',
    desc: 'Halloumiburger, salat og pommes',
    price: 235
  }, {
    id: 'f3',
    name: 'Snacks',
    desc: 'Nachos, nøtter og popcorn',
    price: 145
  }],
  pizzas: [{
    id: 'p1',
    no: 1,
    name: 'El Clásico',
    desc: 'Margherita',
    price: 179
  }, {
    id: 'p2',
    no: 5,
    name: 'Hudson River Derby',
    desc: 'Pepperoni',
    price: 199
  }, {
    id: 'p3',
    no: 6,
    name: 'Kıtalararası Derbi',
    desc: 'Kebab',
    price: 219
  }, {
    id: 'p4',
    no: 7,
    name: 'Old Firm',
    desc: 'Pulled pork og whisky-BBQ',
    price: 229
  }, {
    id: 'p5',
    no: 3,
    name: 'Derby della Lanterna',
    desc: 'Pesto og grønnsaker (vegetar)',
    price: 209
  }]
};
window.kr = n => 'kr ' + n.toLocaleString('nb-NO').replace(/,/g, ' ');
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.LetterBox = __ds_scope.LetterBox;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.RoomCard = __ds_scope.RoomCard;

})();
