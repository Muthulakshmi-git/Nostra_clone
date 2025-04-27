//Check box

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const product = document.querySelectorAll('.product__image');

checkboxes.forEach(checkbox =>
{
    checkbox.addEventListener('change',() =>
    {
        const selectoccasions = getCheckedValues("occasions");
        const selectcolors = getCheckedValues("colors");
        const selectarrivals = getCheckedValues("arrivals");

        product.forEach(product =>
        {
            const occasions = product.dataset.occasions;
            const colors = product.dataset.colors;
            const arrivals = product.dataset.arrivals;

            const matchedoccasions = selectoccasions.length === 0 || selectoccasions.includes(occasions);
            const matchedcolors = selectcolors.length === 0 || selectcolors.includes(colors);
            const matchedarrivals = selectarrivals.length === 0 || selectarrivals.includes(arrivals);

            if(matchedoccasions && matchedcolors && matchedarrivals)
            {
                product.style.display = "block"
            }
            else{
                product.style.display = "none"
            }
        }
        );
    });
}
);
function getCheckedValues(type)
{
    return Array.from(checkboxes)
    .filter(cb => cb.checked && cb.dataset.type === type)
    .map(cb => cb.value);
}

// Search bar

var collectionitems = document.getElementById("collections__items")
var search = document.getElementById("search")
var list = collectionitems.querySelectorAll("div")

search.addEventListener("keyup",function(event)
{
    var enteredvalue = event.target.value.toUpperCase()

    for(count=0; count<list.length; count++)
    {
        var productname = list[count].querySelector("h3").textContent
        
        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            list[count].style.display = "none"
        }
        else{
             list[count].style.display = "block"
        }
        
    }
})