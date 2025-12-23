interface HeaderProps {
  name: string;
  title: string;
  bio?: string;
}

export default function Header({ name, title, bio }: HeaderProps) {
  return (
    <header className="text-center sm:text-left space-y-4">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
        {name}
      </h1>
      <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 font-medium">
        {title}
      </p>
      {bio && (
        <p className="text-lg text-zinc-500 dark:text-zinc-500 max-w-2xl mx-auto sm:mx-0">
          {bio}
        </p>
      )}
    </header>
  );
}
