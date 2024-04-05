export default function BadgeDark(props) {
  const { icon, extra } = props;

  return (
    <span
      className={`${extra} bg-neutral text-base-100 rounded-full flex items-center justify-center p-2 min-w-10 h-10`}
    >
      {icon}
    </span>
  );
}
