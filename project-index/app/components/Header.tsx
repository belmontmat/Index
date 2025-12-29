interface HeaderProps {
  name: string;
  title: string;
  bio?: string;
}

export default function Header({ name, title, bio }: HeaderProps) {
  return (
    <header className="text-center sm:text-left space-y-4">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-retro-brown dark:text-retro-cream transition-colors duration-300">
        {name}
      </h1>
      <p className="text-xl sm:text-2xl text-retro-brown dark:text-retro-cream font-medium transition-colors duration-300">
        {title}
      </p>
      {bio && (
        <p className="text-lg text-retro-darkBrown dark:text-retro-paleYellow max-w-2xl mx-auto sm:mx-0 transition-colors duration-300">
          {bio}
        </p>
      )}
    </header>
  );
}
