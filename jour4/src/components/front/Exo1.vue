<template>
    <div>
        <header>
            <slot name="header"></slot>
            <button>action</button>
        </header>
        <main>
            <slot name="body"></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>