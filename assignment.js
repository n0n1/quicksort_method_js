const values = [2, 27, 14, 52, 31, 96, 73, 47, 22, 6];

function QuickSort(List) {
   if (List.length <= 1) {
       return List;
   }

   const pivot = List[List.length - 1];
   const leftList = [];
   const rightList = [];

   for (let i = 0; i < List.length - 1; i++) {
       if (List[i] < pivot) {
           leftList.push(List[i]);
       }
       else {
           rightList.push(List[i])
       }
   }

   return [...QuickSort(leftList), pivot, ...QuickSort(rightList)];
}

console.log(QuickSort(values));
