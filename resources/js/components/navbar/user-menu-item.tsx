interface UserMenuItem {
    onClick: () => void;
    label: string;
}

const UserMenuItem: React.FC<UserMenuItem> = ({ onClick, label }) => {
    return <div className="cursor-pointer px-4 py-3 font-semibold transition hover:bg-neutral-100">{label}</div>;
};

export default UserMenuItem;
