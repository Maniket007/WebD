let menu = ['palak paneer','chole chwal','Chicken dhatura','paneer butter masala','manchuriyan','chicken biryani','pizza'];
function isVeg(food){
    if((food.toLowerCase().indexOf('chicken')!==-1)||food.toLowerCase().indexOf('egg')!==-1){
        return false;
    }
    return true;
}
let vegMenu = menu.filter(isVeg);
console.log(menu);
console.log(vegMenu);