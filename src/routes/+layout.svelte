<nav class="flex w-full justify-between py-8 px-16 items-center ">
    <img src="/logo.svg" alt="">

    <div class="flex gap-8">
        <a href="/">HOME</a>
        <a href="/">NEWS</a>
        <a href="/">POLITICS</a>
        <a href="/">SPORTS</a>
    </div>

    <input class="border-b-2 bg-[url('/search.svg')] bg-no-repeat bg-[center_left] pl-8" placeholder="Search" type="text" name="search" id="search">
</nav>

<script>import "../app.postcss";</script>

<slot></slot>

<div class="grid grid-cols-2 gap-32 bg-Secondary px-16 py-8">

    <img class="text-white h-full" src="/logo.svg" alt="">

    <div class="flex gap-24 text-white">
        <div class="flex flex-col gap-2">
            <h1 class="text-4xl font-bold">ARTICLES</h1>
            <p class="text-xl">NEWS</p>
            <p class="text-xl">NEWS</p>
            <p class="text-xl">NEWS</p>
            <p class="text-xl">NEWS</p>
            <p class="text-xl">NEWS</p>
            <p class="text-xl">NEWS</p>
        </div>

        <div class="flex flex-col gap-2">
            <h1 class="text-4xl font-bold">WEBSITE</h1>
            <p class="text-xl">NEWS</p>
            <p class="text-xl">NEWS</p>
            <h1 class="text-4xl font-bold">EXTERNAL LINKS</h1>
            <p class="text-xl">NEWS</p>
            <p class="text-xl">NEWS</p>
            <p class="text-xl">NEWS</p>
        </div>
    </div>

</div>