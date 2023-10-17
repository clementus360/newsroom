<script>
    import SvelteMarkdown from 'svelte-markdown'

     export let data;

     const article = data.data

     const SpacedArticle = article.attributes.Article.replace(/\n/g, '<br>'); 

</script>

<div class="grid grid-cols-[3fr_1fr] gap-16 py-4 pb-32 px-16">
    <div class="flex flex-col gap-8 items-center">
        <div class="flex flex-col items-center gap-4">
            <h1 class="text-4xl font-bold">{article.attributes.Title}</h1>
            <h2>Patrick Muneza  {article.attributes.publishedAt}</h2>
        </div>

        <img class="w-full bg-[size:100%]" src={'http://localhost:1337' + article.attributes.Image.data[0].attributes.url} alt="">
        <p class="text-justify">
            <SvelteMarkdown source = { SpacedArticle } />
        </p>
    </div>

    <div class="flex flex-col gap-8 py-40">
        <h1 class="text-4xl font-bold">Read more</h1>
    </div>
</div>