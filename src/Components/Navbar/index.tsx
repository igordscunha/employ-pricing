export const Navbar = () => {
  return(
    <header className="w-screen bg-white z-10 shadow-inner flex justify-center">
      <nav className="w-2/3">
          <div className="flex w-100 p-5 items-center">
            <span className="w-36 ml-4 min-w-16"><img src="/images/Employ-logo-cor-fundo-branco.png"/></span>              
            <div className='grow w-100 flex justify-end items-center'>
              <ul className="hidden w-2/5 gap-10 lg:flex justify-end">
                  <li>
                    <span className="material-symbols-outlined text-blue-400 drop-shadow cursor-pointer hover:scale-125">mail</span>
                  </li>
                  <li>
                    <span className="material-symbols-outlined text-rose-400 drop-shadow cursor-pointer hover:scale-125">shopping_bag</span>
                  </li>
                  <li>
                    <span className="material-symbols-outlined text-amber-400 drop-shadow cursor-pointer hover:scale-125">sell</span>
                  </li>
                  <li>
                    <span className="material-symbols-outlined text-gray-400 drop-shadow cursor-pointer hover:scale-125">settings</span>
                  </li>
              </ul>
              <div className="hidden w-1/3 lg:flex justify-end p-4 items-center">
                <span className="text-[#1EA358] font-bold cursor-pointer px-4">Olá, Maria José</span>
                <span className="bg-[#1EA358] px-2 py-1 rounded-lg font-bold text-white shadow cursor-pointer hover:scale-125">M</span>
              </div>
              <div className="w-1/5 flex justify-end p-4 items-center lg:hidden">
                <span className="mr-6 bg-[#1EA358] px-2 py-1 rounded-lg font-bold text-white shadow cursor-pointer hover:scale-125">M</span>
              </div>
            </div>
          </div>
      </nav>
    </header>
  )
}