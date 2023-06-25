export function ListTitle({ title, icon }: { title: string; icon?: string }) {
  return (
    <div className="list-title">
      <h2>{title}</h2>
    </div>
  );
}
