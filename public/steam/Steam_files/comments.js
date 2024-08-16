
var CommentControl = Class.create( {
	m_elemTextarea: null,
	m_elemButton: null,
	m_strDefaultText: '',
	
	initialize: function( args )
	{
		this.m_elemTextarea = $(args.elemTextarea);
		this.m_elemButton = $(args.elemButton);
		this.m_strDefaultText = args.strDefaultText;

		Event.observe( this.m_elemTextarea, 'keydown', this.handleNewLine.bindAsEventListener( this ) );
		Event.observe( this.m_elemTextarea, 'keyup', this.checkCommentInput.bind( this ) );
		Event.observe( this.m_elemTextarea, 'paste', this.checkCommentInput.bind( this ) );
		Event.observe( this.m_elemTextarea, 'focus', this.clearCommentInput.bind( this ) );
		Event.observe( this.m_elemTextarea, 'blur', this.restoreCommentInput.bind( this ) );
		
		if ( this.m_elemTextarea.value != this.m_strDefaultText )
		{
			this.m_elemButton.show();
		}
		else
		{
			this.m_elemButton.hide();
		}
		
		this.checkCommentInput();
	},

	handleNewLine: function( event )
	{
		if ( event.keyCode == Event.KEY_RETURN )
		{
			// size the box ahead of time
			this.updateTextareaRows( this.m_elemTextarea.rows + 1 );
		}
		
		return false;
	},

	checkCommentInput: function()
	{
		var tbox = this.m_elemTextarea;
		var savebutton = this.m_elemButton;
		if ( !tbox )
		{
			if ( savebutton )
				savebutton.hide();
			return;
		}
		if ( tbox.value.length > 1000 )
		{
			tbox.value = tbox.value.slice( 0, 999 );
		}
		if ( tbox.value != '' && tbox.value != this.m_strDefaultText )
		{
			savebutton.show();
		}
		else
		{
			savebutton.hide();
		}
		curRows = tbox.rows;
		newRows = 1;
		c = 0;
		for ( x = 0; x < tbox.value.length; x++ )
		{
			if ( tbox.value.charAt( x ) == "\n" )
			{
				c = 0;
				newRows++;
				continue;
			}
			c++;
			if ( c >= tbox.cols )
			{
				c = 0;
				newRows++;
				continue;
			}
		}
		if ( newRows != curRows )
		{
			this.updateTextareaRows( newRows );
		}
	},
	
	updateTextareaRows: function( rows )
	{
		var tbox = this.m_elemTextarea;
		if ( Prototype.Browser.Gecko )
		{
			// get rid of the superfluous row firefox adds
			tbox.style.height = (rows*1.25) + 'em';
		}
		tbox.rows = rows;
	},

	clearCommentInput: function()
	{
		var tbox = this.m_elemTextarea;
		if ( tbox.value == this.m_strDefaultText )
		{
			tbox.value = '';
		}
	},

	restoreCommentInput: function()
	{
		var tbox = this.m_elemTextarea;
		if ( tbox.value == '' )
		{
			tbox.value = this.m_strDefaultText;
		}
	}
	
} );

