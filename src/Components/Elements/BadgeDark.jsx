export default function BadgeDark(props) {
  const { icon, extra } = props;

  return (
    <span
      className={`${extra} bg-neutral text-base-100 rounded-box flex w-fit items-center justify-center py-2 px-4 min-w-10 h-10`}
    >
      {icon}
    </span>
  );
}
