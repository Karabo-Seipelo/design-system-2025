import Link from "next/link";
import Icon from "$/atoms/Icon";
import classNames from "classnames";
import { FooterNavListProps } from "./interfaces";

const FooterList: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => (
  <ul
    className={classNames(
      "flex justify-center items-center gap-4 md:gap-6",
      className,
    )}
  >
    {children}
  </ul>
);

const FooterNavList: React.FC<FooterNavListProps> = ({ items, type }) => {
  if (!items || items.length === 0) return null;

  const footerListClasses = classNames({
    "gap-4 md:gap-6": type === "link",
    "gap-6": type === "social",
  });

  const linkItemClasses = classNames({
    "font-medium text-sm text-gray-400 hover:text-gray-900": type === "link",
  });

  const ariaLabel = (label: string, type: string) =>
    type === "link" ? `${label} link` : `${label} profile`;

  return (
    <FooterList className={footerListClasses}>
      {items.map((item, index) => {
        return (
          <li key={`footer-link-${index}-${item.label}`}>
            <Link
              className={linkItemClasses}
              href={item.href}
              aria-label={ariaLabel(item.label, item.type)}
              title={item.label}
            >
              {item.type === "social" ? (
                <Icon name={item.icon} size="xxlarge" color="gray" />
              ) : (
                item.label
              )}
            </Link>
          </li>
        );
      })}
    </FooterList>
  );
};

export default FooterNavList;
