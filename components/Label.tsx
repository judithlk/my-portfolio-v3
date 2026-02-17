type LabelProps = {
  text: string;
};

export default function Label({ text }: LabelProps) {
  return (
    <div className="border-[0.5px] border-border px-2.5 py-1 rounded-full my-2">
        <h4 className="text-muted-text text-xs font-[600] font-body">{text}</h4>
    </div>
  );
}
