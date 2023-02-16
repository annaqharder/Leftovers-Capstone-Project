function Footer() {
    return (
        <footer class="mt-6 p-8 bg-white rounded-lg shadow md:px-6 md:py-6 dark:bg-gray-900">
            {/* <hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" /> */}
            <div class="sm:flex sm:items-center sm:justify-between">
                <a class="flex items-center mb-4 sm:mb-0">
                    <img src="./images/letter-l.png" class="h-8 mr-3" alt=" Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white uppercase">Leftovers</span>
                </a>
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© <a class="hover:underline">Leftovers™</a>. All Rights Reserved.</span>
                <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">Connect</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;