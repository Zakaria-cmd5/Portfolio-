import { stackData } from "@/data/stack";
import Card from "../ui/Card";
import ToolTip from "../ui/ToolTip";

const StackCard = () => {
  return (
    <Card title="My Stack">
      <div className="flex flex-col gap-6 mt-2">
        {stackData.map((s, i) => (
          <div
            key={i}
            className="grid items-center gap-[90px]"
            style={{ gridTemplateColumns: "50px 1fr" }}
          >
            <div className="h-auto flex-none break-words whitespace-pre">
              <p className="text-secondary-foreground">{s.title}</p>
            </div>
            <div className="flex gap-4">
              {s.stack.map((t) => (
                <ToolTip
                  key={t.id}
                  title={t.title}
                  image={t.image}
                  bgColor={t.bgColor}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default StackCard;
