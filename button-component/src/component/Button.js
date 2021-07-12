import classNames from "classnames";
import { MdLocalGroceryStore } from "react-icons/md";

const Button = (props) => {
  var btnClass = classNames({
    outline: props.variant === "outline",
    disabled: !!props.disabled,
    text: props.variant === "text",
    "disable-shadow": !!props.disableShadow,
    "btn-sm": props.size === "sm",
    "btn-md": props.size === "md",
    "btn-lg": props.size === "lg",
    "default-color": props.color === "default",
    "primary-color": props.color === "primary",
    "secondary-color": props.color === "secondary",
    "danger-color": props.color === "danger",
    "focus-neutral": !!props.focusNeutral,
    "focus-primary": !!props.focusPrimary,
    "focus-secondary": !!props.focusSecondary,
    "focus-danger": !!props.focusDanger,
    "focus-outline": !!props.focusOutline,
    "focus-text": !!props.focusText,
    "text-blue": props.textColor === "blue",
  });

  return (
    <button id={!!props.focused ? "focused" : ""} className={btnClass}>
      {props.startIcon === "local_grocery_store" ? (
        <MdLocalGroceryStore style={{ marginRight: 9 }} />
      ) : (
        ""
      )}{" "}
      <p>{props.name ? props.name : "Default"}</p>
      {props.endIcon === "local_grocery_store" ? (
        <MdLocalGroceryStore style={{ marginLeft: 9 }} />
      ) : (
        ""
      )}
    </button>
  );
};
export default Button;
