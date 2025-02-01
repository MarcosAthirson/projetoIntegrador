from flask import *

app = Flask(__name__)
@app.route('/')
def home():
    return render_template('home.html')

@app.route('/pageReceberInfo')
def pageReceberInfo():
    return render_template('info.html')

@app.route('/gerarCurriculo', methods=['POST'])
def gerarCurriculo():
    #sobre você
    nome = request.form.get('nome')
    genero = request.form.get('genero')
    dataNasc = request.form.get('dataNas')
    telefone = request.form.get('telefone')
    email = request.form.get('email')
    linkedin = request.form.get('linkedin')
    sobreVoce = request.form.get('sobreVoce')

    #experiência
    cargo = request.form.get('cargo')
    empresa = request.form.get('empresa')
    data = request.form.get('data')
    atividades = request.form.get('atividades')

    #educação
    curso = request.form.get('curso')
    instituicao = request.form.get('instituicao')
    ano = request.form.get('ano')

    #educação complementar
    comp1 = request.form.get('complemento1')
    comp2 = request.form.get('complemento2')
    comp3 = request.form.get('complemento3')
    comp4 = request.form.get('complemento4')

    if (cargo == '' or empresa == '' or data == '' or atividades == '') and (comp1 == '' and comp2 == '' and comp3 == '' and comp4 == ''):
        return render_template('resultado.html', nome=nome, genero=genero, dataNasc=dataNasc, telefone=telefone, email=email, linkedin=linkedin, sobreVoce=sobreVoce, curso=curso, instituicao=instituicao, ano=ano)

    elif cargo == '' or empresa == '' or data == '' or atividades == '':
        return render_template('resultado.html', eduComp='EDUCAÇÃO COMPLEMENTAR', nome=nome, genero=genero, dataNasc=dataNasc, telefone=telefone, email=email, linkedin=linkedin, sobreVoce=sobreVoce, curso=curso, instituicao=instituicao, ano=ano, comp1=comp1, comp2=comp2, comp3=comp3, comp4=comp4)

    elif comp1 == '' and comp2 == '' and comp3 == '' and comp4 == '':
        return render_template('resultado.html', exp='EXPERIÊNCIA', nome=nome, genero=genero, dataNasc=dataNasc, telefone=telefone, email=email, linkedin=linkedin, sobreVoce=sobreVoce, cargo=cargo, empresa=empresa, data=data, atividades=atividades, curso=curso, instituicao=instituicao, ano=ano)

    else:
        return render_template('resultado.html',exp='EXPERIÊNCIA', eduComp='EDUCAÇÃO COMPLEMENTAR', nome=nome, genero=genero, dataNasc=dataNasc, telefone=telefone, email=email, linkedin=linkedin, sobreVoce=sobreVoce, cargo=cargo, empresa=empresa, data=data, atividades=atividades, curso=curso, instituicao=instituicao, ano=ano, comp1=comp1, comp2=comp2, comp3=comp3, comp4=comp4)

if __name__ == '__main__':
    app.run(debug=True)