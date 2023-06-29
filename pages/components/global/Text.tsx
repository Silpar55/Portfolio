type Props = {
  children: React.ReactNode;
};

const Text = ({ children }: Props) => {
  return (
    <div className="text-xl text-center mt-5">
      <p>{children}</p>
    </div>
  );
};

export default Text;
