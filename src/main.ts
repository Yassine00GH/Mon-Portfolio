import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project { title:string; category:string; stack:string; description:string; icon:string; featured?:boolean; github?:string; }

@Component({selector:'app-root',standalone:true,imports:[CommonModule],templateUrl:'./app.component.html'})
export class AppComponent {
  menuOpen=false; activeFilter='Tous';
  filters=['Tous','Web','Mobile','IA & Data','Logiciel'];
  skills=[
    {name:'HTML5 / CSS3',level:90,group:'Frontend'},{name:'JavaScript',level:84,group:'Frontend'},{name:'Angular',level:78,group:'Frontend'},
    {name:'PHP',level:80,group:'Backend'},{name:'Java / OOP',level:76,group:'Backend'},{name:'Python',level:82,group:'IA & Data'},
    {name:'SQL / MySQL',level:84,group:'Data'},{name:'Flutter / Dart',level:72,group:'Mobile'},{name:'Git / GitHub',level:82,group:'Tools'}
  ];
  projects:Project[]=[
    {title:'Agent IA — Assistant client',category:'IA & Data',stack:'Python · NLP · SQL · API',description:'Assistant orienté relation client et aide à la décision marketing, avec exploitation de données commerciales et recommandations.',icon:'🤖',featured:true},
    {title:'Site web dynamique — Restaurant',category:'Web',stack:'PHP · JavaScript · MySQL · Bootstrap',description:'Application web avec menu, réservations, commandes et espace d’administration connecté à MySQL.',icon:'🍝',featured:true},
    {title:'Gestion de stock',category:'Mobile',stack:'Flutter · Dart · REST API · DB',description:'Application de suivi des produits et mouvements avec recherche, filtres et tableau de bord.',icon:'📦',featured:true},
    {title:'Site web de bijouterie',category:'Web',stack:'PHP · HTML · CSS · JS · MySQL',description:'Catalogue produit et interfaces frontend/backend pour présenter et gérer une activité de bijouterie.',icon:'💎',featured:true},
    {title:'Vision par ordinateur — Gestes',category:'IA & Data',stack:'Python · OpenCV · MediaPipe · NumPy',description:'Détection de gestes de la main utilisée pour piloter le volume d’un ordinateur.',icon:'👁️'},
    {title:'Jeu desktop JavaFX',category:'Logiciel',stack:'Java · JavaFX · POO',description:'Jeu interactif avec interface graphique, gestion des événements, règles et score.',icon:'🎮'},
    {title:'Mini-jeux Web',category:'Web',stack:'HTML · CSS · JavaScript',description:'Collection de mini-jeux web : Jump Game, Snake et Pierre-Feuille-Ciseaux.',icon:'🕹️'}
  ];
  get filteredProjects(){return this.activeFilter==='Tous'?this.projects:this.projects.filter(p=>p.category===this.activeFilter)}
  setFilter(f:string){this.activeFilter=f}
  scroll(id:string){this.menuOpen=false; document.getElementById(id)?.scrollIntoView({behavior:'smooth'});}
  getSkillsByGroup(group:string){return this.skills.filter(s=>s.group===group);}
  getSkillCountByGroup(group:string){return this.skills.filter(s=>s.group===group).length;}
}

bootstrapApplication(AppComponent,{providers:[provideAnimationsAsync()]}).catch(err=>console.error(err));
