import Web from "./index";
import ReactDOM from "react-dom/client";


const root = document.getElementById('root');

if (root) {
    ReactDOM.createRoot(root).render(<Web />);
} else {
    throw new Error('Ooops!');
}

