type Props = {
  children: React.ReactNode;
  style?: string;
};

const Text = ({ children, style }: Props) => {
  return (
    <div className="text-xl text-center mt-5">
      <p className={`${typeof style === "string" && style}`}>{children}</p>
    </div>
  );
};

export default Text;
