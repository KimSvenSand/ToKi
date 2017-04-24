console.info(computeMaxCallStackSize());

function computeMaxCallStackSize() {
    try {
        return 1 + computeMaxCallStackSize();
    } catch (e) {
        // Call stack overflow
        return 1;
    }
}
