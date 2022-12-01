<template>
    <div>
        <h1>Slot</h1>
        <MyModal>
            <template #footer>
                <button class="btn btn-sm btn-dark">lire la suite !</button>
            </template>
            <template  #body>
                <h2>découverte de slot nommé</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, porro natus. Repellendus quos architecto nesciunt voluptate earum a ullam unde impedit nisi cum explicabo repellat nostrum, quia adipisci, at vero.</p>
            </template> 
        </MyModal>
        <MyModal>
            <template #footer>
                <button class="btn btn-sm btn-success">lire la suite !</button>
            </template>
            <template  #body>
                <h2>découverte de slot nommé</h2>
                <input type="text">
            </template> 
        </MyModal>
    </div>
</template>

<script>
    import MyModal from './MyModal.vue';
    export default {
    components: { MyModal }
}
</script>