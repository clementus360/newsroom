
<script>
    /**
	 * @type {string}
	 */
     export let category
     
     /**
	 * @type {string}
	 */
      export let title

      /**
       * @type {string}
       */
      export let image

    /**
	 * @type {string}
	 */
     export let link
</script>

<div style="background-image: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.8)), url({image});" class="bg-gray-700 h-[70vh] w-full flex px-16 py-12 items-end bg-cover">
    <div class="flex flex-col gap-4">
        <button class="bg-white text-Secondary rounded-lg flex items-center gap-4 py-2 px-4 w-max">
            <img src="/star.svg" alt="Featured">
            Featured
        </button>
        <h1 class="text-white text-4xl w-10/12 font-bold">{title}</h1>
        <p class="text-white text-xl w-10/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, provident? Eum id exercitationem, facilis quidem nam quo repellat fuga ipsum.</p>
        <button class="bg-Primary rounded-lg text-xl text-white font-bold flex items-center gap-4 py-2 px-8 w-max">
            Read more
        </button>

    </div>
</div>