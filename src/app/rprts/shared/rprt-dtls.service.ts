import { Injectable, Component,ComponentFactoryResolver } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { NgbModal, NgbModalRef,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
//import { Author } from './author.model';
//import { AuthorService } from './author.service';

@Injectable()
export class RprtDtlsPopupService {
    private isOpen = false;
	 	ngbModalRef: NgbModalRef;
    constructor(
        private ngbModal: NgbModal,
       // private router: Router,
      //  private authorService: AuthorService
	//    private componentFactoryResolver: ComponentFactoryResolver

    ) { 
	console.log("popup service");
	
	}

   open(content: any, options?: NgbModalOptions): NgbModalRef {
	console.log("popup service open");
	 // this.ngbModalRef = this.ngbModalService.open(content, config);
	  this.ngbModalRef = this.ngbModal.open(content, options);
	 return this.ngbModalRef;
	}
	/*showDefaultModalComponent(theComponent: any, name: any) {
	
	console.log("show");
    const componenetFactory = this.componentFactoryResolver.resolveComponentFactory(
      theComponent
    );
    const modalRef = this.ngbModalService.open(theComponent);
    modalRef.componentInstance.name = name;
    return modalRef;
  }
  */
   close() {
  console.log("close");
    this.ngbModalRef.close();
  }
/*
    authorModalRef(component: Component /*, author: Author): NgbModalRef {
	
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        /*modalRef.componentInstance.author = author;
        modalRef.result.then((result) => {
            this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            this.isOpen = false;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            this.isOpen = false;
        });
        return modalRef;
    }
	*/
}