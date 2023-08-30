

const form = document.querySelector('form')

// note => form jab bhi submit hota h ya to post type ya to get type se submit hota 
// lakin  jub bhi submit hota hai to ushki value url me ya server me chali jati hai
// to ushko hame rokna padega

form.addEventListener('submit', function (e){
      e.preventDefault() // stope default set data server
      
      const height = parseInt(document.querySelector('#height').value)
      const weight = parseInt(document.querySelector('#weight').value)

      const results = document.querySelector('#results')

      const massage = document.querySelector('.massage')
      const btn = document.getElementById('btn');

      

      if(height === '' || height < 0 || isNaN(height)){
            results.innerHTML = `please give a valid height ${height}`;
      }else if (weight === '' || weight < 0 || isNaN(weight)){
            results.innerHTML = `please give a valid weight ${weight}`;
      }else {
            const  bmi =  (weight / ((height * height) / 10000)).toFixed(2);

            
            results.innerHTML = `<span>${bmi}</span>`;

           
      
      }


      function myFunction() {
            document.getElementById("myForm").reset();
      }
});