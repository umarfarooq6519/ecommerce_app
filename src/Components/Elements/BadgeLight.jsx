export default function BadgeLight(props) {
  const { icon, extra } = props;

  return (
    <span
      className={`${extra} bg-base-200 text-neutral rounded-full flex items-center justify-center p-2 min-w-10 h-10`}
    >
      {icon}
    </span>
  );
}
