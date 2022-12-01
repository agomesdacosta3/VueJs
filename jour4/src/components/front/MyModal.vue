<template>
    <div>
        <header>
            Fenêtre modal 
            <button> x </button>
        </header>
        <div>
            <slot name="body"></slot>
        </div>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>