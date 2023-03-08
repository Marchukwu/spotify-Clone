import "../styles/RightMenu.css";

function Button({ icon, name }) {
  return (
   <button className="shortcutButton"><span>{icon}</span> {name}</button>
  );
}

export {Button };
