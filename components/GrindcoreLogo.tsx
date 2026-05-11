import Image from 'next/image';

export function CorajeLogo() {
  return (
    <Image
      src="/coraje-logo-brown-square-512.png"
      alt="Grupo Coraje"
      width={36}
      height={36}
      className="h-9 w-9 object-contain"
      priority
    />
  );
}