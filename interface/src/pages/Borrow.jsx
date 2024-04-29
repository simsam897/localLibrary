const Borrow = () => {
  return (
    <div>
      <h1>Borrow</h1>
      <div class="overflow-x-auto overflow-y-hidden md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
        <div data-testid="table-element" class="relative">
          <div class="absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-black shadow-md mt-5"></div>
          <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400 shadow-md mt-5">
            <thead class="group/head text-xs uppercase text-gray-700 dark:text-gray-400">
              <tr>
                <th class="bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700">
                  Students Image
                </th>
                <th class="bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700">
                  Students Name
                </th>
                <th class="bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700">
                  Books Image
                </th>
                <th class="bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700">
                  Books Name
                </th>
                <th class="bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700">
                  Borrow Date
                </th>
                <th class="bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700">
                  Return Date
                </th>
                <th class="bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700">
                  Qyt
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Borrow;
