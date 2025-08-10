export default function Header() {
  return (
    <header className="bg-blue-700 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Hi, I'm Coen!</h1>
      <nav className="space-x-6">
        <a href="#about" className="hover:underline">關於我</a>
        <a href="#skills" className="hover:underline">技能</a>
        <a href="#projects" className="hover:underline">專案</a>
        <a href="#tutor" className="hover:underline">家教</a>
        <a href="#contact" className="hover:underline">聯絡我</a>
      </nav>
    </header>
  );
}
