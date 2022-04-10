import toastr from "toastr";
toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-top-center",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "10000",
    "hideDuration": "10000",
    "timeOut": "10000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};
export const ShowMessage = (header, message) => {
   let type = '';
      switch(header) {
        case 'DONE':
          type='success';
          break;
        case 'INFO':
          type = 'info';
          break;
        case 'ERROR':
            type = "error";
          break;
          case 'WARN':
            type = "warning";
          break;
        default:
          type = 'info';
          break;
      }

    toastr[type](message)

};
export const type = {
	DONE: "DONE",
	INFO: "INFO",
	ERROR: "ERROR",
	WARN: "WARN"
};
