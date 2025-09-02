import React from 'react';
import ColoredText from './components/ColoredText';
import AlertButton from './components/AlertButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, FolderGit2, Palette, MousePointerClick, Terminal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Desafio React Quest
          </h1>
          <p className="text-lg text-gray-600">
            Implementação dos desafios propostos usando React + Vite
          </p>
        </header>

        <div className="space-y-12">
          {/* Desafio 1 - Componente de Texto Colorido */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
              <Palette className="text-blue-500" />
              Desafio 1: Componente de Texto Colorido
            </h2>
            <p className="text-gray-600 mb-6">
              Componente que colore e transforma um texto para maiúsculo utilizando JavaScript.
            </p>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Exemplos:</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-500 block mb-1">
                      Texto: "Olá mundo!" | Cor: "red"
                    </span>
                    <Badge variant="outline">
                      <ColoredText text="Olá mundo!" color="red" />
                    </Badge>
                  </div>
                  
                  <div>
                    <span className="text-sm text-gray-500 block mb-1">
                      Texto: "React é incrível" | Cor: "#2563eb"
                    </span>
                    <Badge variant="outline">
                      <ColoredText text="React é incrível" color="#2563eb" />
                    </Badge>
                  </div>
                  
                  <div>
                    <span className="text-sm text-gray-500 block mb-1">
                      Texto: "Desenvolvedor Frontend" | Cor: "green"
                    </span>
                    <Badge variant="outline">
                      <ColoredText text="Desenvolvedor Frontend" color="green" />
                    </Badge>
                  </div>
                  
                  <div>
                    <span className="text-sm text-gray-500 block mb-1">
                      Texto: "JavaScript & React" | Cor: "#f59e0b"
                    </span>
                    <Badge variant="outline">
                      <ColoredText text="JavaScript & React" color="#f59e0b" />
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Desafio 2 - Componente de Botão com Alerta */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
              <MousePointerClick className="text-blue-500" />
              Desafio 2: Componente de Botão com Alerta
            </h2>
            <p className="text-gray-600 mb-6">
              Componente Button com evento de clique que apresenta um alerta informando a label do botão.
            </p>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Exemplos de botões:</h3>
                <div className="flex flex-wrap gap-4">
                  <AlertButton label="Baixar CV" />
                  <AlertButton label="Enviar Mensagem" />
                  <AlertButton label="Salvar Projeto" />
                  <AlertButton label="Fazer Login" />
                  <AlertButton label="Compartilhar" />
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Clique em qualquer botão para ver o alerta com a respectiva label.
                </p>
              </div>
            </div>
          </section>

          {/* Informações Técnicas */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
              <Terminal className="text-blue-500" />
              Informações Técnicas
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-medium">Tecnologias Utilizadas</CardTitle>
                  <Cpu className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">•</span>
                      <span>React 18</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">•</span>
                      <span>Vite (Build Tool)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">•</span>
                      <span>Tailwind CSS</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">•</span>
                      <span>JavaScript (JSX)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-medium">Estrutura dos Componentes</CardTitle>
                  <FolderGit2 className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">•</span>
                      <code className="bg-gray-100 px-2 py-1 rounded">ColoredText.jsx</code>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">•</span>
                      <code className="bg-gray-100 px-2 py-1 rounded">AlertButton.jsx</code>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">•</span>
                      <span>Props bem definidas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">•</span>
                      <span>Código limpo e reutilizável</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        <footer className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500">
            Projeto desenvolvido como parte do Desafio React Quest
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;