import { animatePageOut } from '../animations';

interface Props {
    href: string;
    label: string;
    currentPage: string;
    onNavigate: (path: string) => void;
}

/**
 *
 * @param {object} props
 * @param {string} props.href - The target "path" for navigation (e.g., 'home', 'about').
 * @param {string} props.label - The text content of the link.
 * @param {string} props.currentPage - The currently active "page" identifier.
 * @param {function} props.onNavigate - Callback function from the parent to update the current page.
 */
const TransitionLink = ({ href, label, currentPage, onNavigate }: Props) => {
    const handleClick = () => {
        if (currentPage !== href) {
            animatePageOut(() => onNavigate(href));
        }
    };

    return (
        <button
            className="text-neutral-900 hover:text-neutral-700 transition-colors duration-300 rounded-md px-4 py-2 cursor-pointer"
            onClick={handleClick}
            style={{
                color: currentPage === href ? '#fff' : '#fff',
            }}
        >
            {label}
        </button>
    );
};

export default TransitionLink;
