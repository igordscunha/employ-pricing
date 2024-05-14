export const Precos = () => {
  return(
    <main className="w-screen shadow-inner bg-gradient-to-b from-[#1EA358] from-10% to-[#2BED81] to-90%">
      <div className="py-24 flex flex-col gap-10">
        <h1 className="text-white drop-shadow font-light cursor-default">Escolha o plano perfeito para você</h1>
        <h3 className="text-white drop-shadow cursor-default">Ei... Não precisa de cartão de crédito e cabe no seu bolso &#128521;</h3>
      </div>
      <section className="flex flex-col justify-center items-center p-12 pb-24">
        <div className="flex gap-4">
          <div className="flex gap-4 items-center">
            <div className="bg-white w-64 h-24 rounded-xl text-[#1EA358] content-center justify-center shadow-2xl">
              <img src="/images/employ-planos.png" className="w-5/6 ml-5"/>
            </div>
            <div className="relative bg-gradient-to-r from-[#4f2df3] to-[#9818fc] opacity-95 w-52 h-24 rounded-xl text-white content-center shadow-md">
              <p className="absolute bg-white text-black text-2xl font-black h-12 content-center rounded-3xl w-52 top-[-30px] shadow-md tracking-widest uppercase">Easy</p>
              <div className="flex flex-col justify-end h-24 gap-2 py-2">
                <h3 className="font-black text-4xl">R$20</h3>
                <p className="text-[9px]">Letrinhas miúdas miúdas letrinhas</p>
              </div>
            </div>
            <div className="relative bg-gradient-to-r from-[#1f6df7] to-[#10c2dd] opacity-95 w-52 h-24 rounded-xl text-white content-center shadow-md">
              <p className="absolute bg-white text-black text-2xl font-black h-12 content-center rounded-3xl w-52 top-[-30px] shadow-md tracking-widest uppercase">Medium</p>
              <div className="flex flex-col justify-end h-24 gap-2 py-2">
                <h3 className="font-black text-4xl">R$50</h3>
                <p className="text-[9px]">Letrinhas miúdas miúdas letrinhas</p>
              </div>
            </div>
            <div className="relative bg-gradient-to-r from-[#e33c91] to-[#f56c40] opacity-95 w-52 h-24 rounded-xl text-white content-center shadow-md">
              <p className="absolute bg-white text-black text-2xl font-black h-12 content-center rounded-3xl w-52 top-[-30px] shadow-md tracking-widest uppercase">Hard</p>
              <div className="flex flex-col justify-end h-24 gap-2 py-2">
                <h3 className="font-black text-4xl">R$100</h3>
                <p className="text-[9px]">Letrinhas miúdas miúdas letrinhas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-4 gap-4">

          <div className="rounded-xl w-64 h-96 flex flex-col gap-2">
            <div className="bg-white rounded-3xl text-[#1EA358] h-12 pl-4 text-sm flex gap-4 items-center justify-start shadow-2xl">
              <p className="rounded-full p-2 px-3 bg-[#ece9f4] font-extrabold">01</p>
              <p className="text-black font-semibold tracking-wider uppercase">Duração</p>            
            </div>
            <div className="bg-white text-[#1EA358] rounded-3xl h-12 pl-4 text-sm flex gap-4 items-center justify-start shadow-2xl">
              <p className="rounded-full p-2 px-3 bg-[#ece9f4] font-extrabold">02</p>
              <p className="text-black font-semibold tracking-wider uppercase">Database</p>      
            </div>
            <div className="bg-white text-[#1EA358] rounded-3xl h-12 pl-4 text-sm flex gap-4 items-center justify-start shadow-2xl">
              <p className="rounded-full p-2 px-3 bg-[#ece9f4] font-extrabold">03</p>
              <p className="text-black font-semibold tracking-wider uppercase">serviço de Email</p>      
            </div>
            <div className="bg-white text-[#1EA358] rounded-3xl h-12 pl-4 text-sm flex gap-4 items-center justify-start shadow-2xl">
              <p className="rounded-full p-2 px-3 bg-[#ece9f4] font-extrabold">04</p>
              <p className="text-black font-semibold tracking-wider uppercase">Fórum</p>      
            </div>
            <div className="bg-white text-[#1EA358] rounded-3xl h-12 pl-4 text-sm flex gap-4 items-center justify-start shadow-2xl">
              <p className="rounded-full p-2 px-3 bg-[#ece9f4] font-extrabold">05</p>
              <p className="text-black font-semibold tracking-wider uppercase">Atendimento 24h</p>      
            </div>
            <div className="bg-white text-[#1EA358] rounded-3xl h-12 pl-4 text-sm flex gap-4 items-center justify-start shadow-2xl">
              <p className="rounded-full p-2 px-3 bg-[#ece9f4] font-extrabold">06</p>
              <p className="text-black font-semibold tracking-wider uppercase">Mentoria</p>      
            </div>
            <div className="bg-white text-[#1EA358] rounded-3xl h-12 pl-4 text-sm flex gap-4 items-center justify-start shadow-2xl">
              <p className="rounded-full p-2 px-3 bg-[#ece9f4] font-extrabold">07</p>
              <p className="text-black font-semibold tracking-wider uppercase">Especialistas</p>      
            </div>
          </div>

          <div className="bg-[#ece9f4] relative rounded-xl w-52 h-96 flex flex-col shadow-xl">
            <div className="bg-white text-[#1EA358] rounded-t-xl h-14 w-full content-center">
              <p className="font-medium text-black text-xl">1 mês</p>
            </div>
            <span className="h-14 w-full content-center">
              <p className="font-extrabold text-[#9818fc] text-3xl">5GB</p>
            </span>
            <span className="bg-white text-[#1EA358]  h-14 w-full content-center">
              <span className="material-symbols-outlined text-[#9818fc] mt-1">circle</span>
            </span>
            <span className="h-14 w-full content-center">
              <span className="material-symbols-outlined text-[#9818fc] mt-1">circle</span>
            </span>
            <span className="bg-white text-[#1EA358] h-14 w-full content-center">
              <span className="material-symbols-outlined text-[#b8b4d0] text-3xl mt-1">close</span>
            </span>
            <span className="h-14 w-full content-center">
              <span className="material-symbols-outlined text-[#b8b4d0] text-3xl mt-1">close</span>
            </span>
            <span className="bg-white text-[#1EA358] rounded-b-xl h-14 w-full content-center z-30">
              <span className="material-symbols-outlined text-[#b8b4d0] text-3xl mt-1">close</span>
            </span>
            <div className="h-20 py-2 content-end w-48 absolute bottom-[-45px] left-2 rounded-b-3xl bg-[#ece9f4] z-10 shadow-md opacity-70 hover:translate-y-6 hover:opacity-100">
              <p className="text-xl text-[#9818fc] font-semibold uppercase cursor-pointer">Obter Plano</p>
            </div>
          </div>

          <div className="bg-[#ece9f4] relative rounded-xl w-52 h-96 flex flex-col shadow-xl">
            <div className="bg-white rounded-t-xl h-14 w-full content-center">
              <p className="text-black font-medium text-xl">3 meses</p>
            </div>
            <span className="text-[#1EA358] h-14 w-full content-center">
              <p className="font-extrabold text-[#10c2dd] text-3xl">100GB</p>
            </span>
            <span className="bg-white h-14 w-full content-center">
              <span className="material-symbols-outlined text-[#10c2dd] mt-1">circle</span>
            </span>
            <span className="text-[#1EA358] h-14 w-full content-center">
              <span className="material-symbols-outlined text-[#10c2dd] mt-1">circle</span>
            </span>
            <span className="bg-white h-14 w-full content-center">
              <span className="material-symbols-outlined text-[#10c2dd] mt-1">circle</span>
            </span>
            <span className="text-[#1EA358] h-14 w-full content-center">
              <span className="material-symbols-outlined text-[#b8b4d0] text-3xl mt-1">close</span>
            </span>
            <span className="bg-white rounded-b-xl h-14 w-full content-center z-30">
              <span className="material-symbols-outlined text-[#b8b4d0] text-3xl mt-1">close</span>
            </span>
            <div className="h-20 py-2 content-end w-48 absolute bottom-[-45px] left-2 rounded-b-3xl bg-[#ece9f4] z-10 shadow-md opacity-70 hover:translate-y-6 hover:opacity-100">
              <p className="text-xl text-[#10c2dd] font-semibold uppercase cursor-pointer">Obter Plano</p>
            </div>
          </div>
          
          <div className="bg-[#ece9f4] relative rounded-xl w-52 h-96 flex flex-col shadow-xl">
            <div className="bg-white text-[#1EA358] rounded-t-xl h-14 w-full content-center">
              <p className="font-medium text-black text-xl">12 meses</p>
            </div>
            <span className="h-14 w-full content-center">
              <p className="font-extrabold text-[#f56c40] text-3xl">500GB</p>
            </span>
            <span className="bg-white text-[#1EA358] h-14 w-full content-center">
              <span className="material-symbols-outlined text-[#f56c40] mt-1">circle</span>
            </span>
            <span className="h-14 w-full content-center">
              <span className="material-symbols-outlined text-[#f56c40] mt-1">circle</span>
            </span>
            <span className="bg-white text-[#1EA358] h-14 w-full content-center">
              <span className="material-symbols-outlined text-[#f56c40] mt-1">circle</span>
            </span>
            <span className="h-14 w-full content-center">
              <span className="material-symbols-outlined text-[#f56c40] mt-1">circle</span>
            </span>
            <span className="bg-white text-[#1EA358] rounded-b-xl h-14 w-full content-center z-30">
              <span className="material-symbols-outlined text-[#f56c40] mt-1">circle</span>
            </span>
            <div className="h-20 py-2 content-end w-48 absolute bottom-[-45px] left-2 rounded-b-3xl bg-[#ece9f4] z-10 shadow-md opacity-70 hover:translate-y-6 hover:opacity-100">
              <p className="text-xl text-[#f56c40] font-semibold uppercase cursor-pointer">Obter Plano</p>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}