import { useState } from "react";

export function Header({
  onSubmit,
  disabled,
}: {
  onSubmit: (query: string) => void;
  disabled: boolean;
}) {
  const [query, setQuery] = useState("");
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onSubmit(query);
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter 0x, name.eth, fc_fname:name, or name.lens"
          type="text"
          required
          minLength={3}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={disabled}
        />
        <button disabled={disabled}>Go</button>
      </form>
    </header>
  );
}
