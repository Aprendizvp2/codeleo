export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex justify-center items-center flex-col py-12 gap-4">
      <p className="text-gray-500 text-center">
        Copyright ©{currentYear} All rights reserved
      </p>
      <p className="text-gray-500 text-center">Created by Codeleo</p>
    </div>
  );
}