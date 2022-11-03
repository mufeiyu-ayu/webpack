import number from './number'
import print from './print'
number()
print()
if (module.hot) {
    module.hot.accept('./number.js', () => {
        const number1 = document.getElementById('number1')
        number1.remove()
        number()
    })
}
